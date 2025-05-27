// Расширенный скрипт для выбора и редактирования элементов в iframe с поддержкой классов Tailwind
(function () {
  "use strict";

  // Состояние
  const state = {
    isActive: false,
    selectedElement: null,
    hoveredElement: null,
  };

  // Стили для подсветки
  const STYLES = `
    [data-hovered] {
      outline: 2px dashed #0da2e7 !important;
      outline-offset: 2px !important;
      cursor: pointer !important;
    }

    [data-selected] {
      outline: 2px solid #0da2e7 !important;
      outline-offset: 2px !important;
    }
  `;

  // Добавляем стили
  const styleSheet = document.createElement("style");
  styleSheet.textContent = STYLES;
  document.head.appendChild(styleSheet);

  // Получить Tailwind классы для margin и padding
  function getTailwindSpacingClasses(element) {
    if (!element) return {};

    const spacingValues = {
      marginX: 0,
      marginY: 0,
      paddingX: 0,
      paddingY: 0
    };

    // Получаем все классы элемента
    const classes = Array.from(element.classList);

    // Функция для извлечения числового значения из класса типа mx-[10px]
    function extractValue(className) {
      const match = className.match(/\[(\d+)px\]/);
      return match ? parseInt(match[1]) : 0;
    }

    // Проверяем наличие tailwind классов для margin и padding
    classes.forEach(className => {
      if (className.startsWith('mx-[')) {
        spacingValues.marginX = extractValue(className);
      }
      else if (className.startsWith('my-[')) {
        spacingValues.marginY = extractValue(className);
      }
      else if (className.startsWith('px-[')) {
        spacingValues.paddingX = extractValue(className);
      }
      else if (className.startsWith('py-[')) {
        spacingValues.paddingY = extractValue(className);
      }
    });

    console.log("Tailwind spacing classes:", spacingValues);
    return spacingValues;
  }

  // Получить информацию об элементе
  function getElementInfo(element) {
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    const styles = window.getComputedStyle(element);
    const classList = Array.from(element.classList);

    // Получаем информацию о tailwind классах
    const tailwindSpacing = getTailwindSpacingClasses(element);

    // Пытаемся получить информацию о расположении в коде
    let sourceLocation = null;

    // Проверяем data-pp-id формат (path:line:col)
    const ppId = element.getAttribute("data-pp-id");
    if (ppId) {
      const [filePath, line, col] = ppId.split(":");
      sourceLocation = {
        filePath,
        line: parseInt(line || "0"),
        column: parseInt(col || "0"),
      };
    } else {
      // Проверяем альтернативные атрибуты
      const componentPath = element.getAttribute("data-component-path");
      const componentLine = element.getAttribute("data-component-line");
      if (componentPath) {
        sourceLocation = {
          filePath: componentPath,
          line: parseInt(componentLine || "0"),
          column: 0,
        };
      }
    }

    // Подготавливаем стили, добавляя информацию из tailwind классов
    const elementStyles = {
      fontSize: styles.fontSize,
      fontWeight: styles.fontWeight,
      color: styles.color,
      backgroundColor: styles.backgroundColor,
      paddingTop: styles.paddingTop,
      paddingRight: styles.paddingRight,
      paddingBottom: styles.paddingBottom,
      paddingLeft: styles.paddingLeft,
      marginTop: styles.marginTop,
      marginRight: styles.marginRight,
      marginBottom: styles.marginBottom,
      marginLeft: styles.marginLeft,
      textAlign: styles.textAlign,
      borderRadius: styles.borderRadius,
    };

    // Если есть tailwind классы для маржинов и паддингов, добавляем их в стили
    if (tailwindSpacing.marginX > 0) {
      elementStyles.marginLeftTW = tailwindSpacing.marginX + 'px';
      elementStyles.marginRightTW = tailwindSpacing.marginX + 'px';
    }

    if (tailwindSpacing.marginY > 0) {
      elementStyles.marginTopTW = tailwindSpacing.marginY + 'px';
      elementStyles.marginBottomTW = tailwindSpacing.marginY + 'px';
    }

    if (tailwindSpacing.paddingX > 0) {
      elementStyles.paddingLeftTW = tailwindSpacing.paddingX + 'px';
      elementStyles.paddingRightTW = tailwindSpacing.paddingX + 'px';
    }

    if (tailwindSpacing.paddingY > 0) {
      elementStyles.paddingTopTW = tailwindSpacing.paddingY + 'px';
      elementStyles.paddingBottomTW = tailwindSpacing.paddingY + 'px';
    }

    return {
      tagName: element.tagName.toLowerCase(),
      text: element.innerText || element.textContent,
      classList: classList,
      styles: elementStyles,
      source: sourceLocation,
      rect: {
        width: rect.width,
        height: rect.height,
      },
      tailwindSpacing: tailwindSpacing
    };
  }

  // Отправить сообщение родителю
  function sendToParent(type, data) {
    window.parent.postMessage(
      {
        type,
        data,
        source: "element-selector",
      },
      "*",
    );
  }

  // Обработчики событий
  function handleMouseOver(e) {
    if (!state.isActive) return;

    const element = e.target;
    if (element === state.hoveredElement) return;

    // Убираем предыдущую подсветку
    if (state.hoveredElement) {
      state.hoveredElement.removeAttribute("data-hovered");
    }

    // Добавляем новую
    state.hoveredElement = element;
    element.setAttribute("data-hovered", "");
  }

  function handleMouseOut(e) {
    if (!state.isActive) return;

    const element = e.target;
    if (element === state.hoveredElement) {
      element.removeAttribute("data-hovered");
      state.hoveredElement = null;
    }
  }

  function handleClick(e) {
    if (!state.isActive) return;

    e.preventDefault();
    e.stopPropagation();

    const element = e.target;

    // Убираем предыдущее выделение
    if (state.selectedElement) {
      state.selectedElement.removeAttribute("data-selected");
    }

    // Выделяем новый элемент
    state.selectedElement = element;
    element.setAttribute("data-selected", "");

    // Отправляем информацию родителю
    sendToParent("ELEMENT_SELECTED", getElementInfo(element));
  }

  // Активировать режим выбора
  function activate() {
    state.isActive = true;

    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mouseout", handleMouseOut, true);
    document.addEventListener("click", handleClick, true);

    sendToParent("SELECTOR_ACTIVATED", {});
  }

  // Деактивировать режим выбора
  function deactivate() {
    state.isActive = false;

    document.removeEventListener("mouseover", handleMouseOver, true);
    document.removeEventListener("mouseout", handleMouseOut, true);
    document.removeEventListener("click", handleClick, true);

    // Убираем все атрибуты
    if (state.hoveredElement) {
      state.hoveredElement.removeAttribute("data-hovered");
    }
    if (state.selectedElement) {
      state.selectedElement.removeAttribute("data-selected");
    }

    state.hoveredElement = null;
    state.selectedElement = null;

    sendToParent("SELECTOR_DEACTIVATED", {});
  }

  // Обновить элемент
  function updateElement(data) {
    if (!state.selectedElement) return;

    const { property, value } = data;

    try {
      if (property === "text") {
        state.selectedElement.innerText = value;
      } else if (property.startsWith("style.")) {
        const styleProp = property.substring(6);
        state.selectedElement.style[styleProp] = value;
      }

      sendToParent("ELEMENT_UPDATED", {
        property,
        value,
        element: getElementInfo(state.selectedElement),
      });
    } catch (error) {
      sendToParent("ERROR", { message: error.message });
    }
  }

  // Добавить класс элементу
  function addClass(data) {
    if (!state.selectedElement) return;

    const { className } = data;

    try {
      state.selectedElement.classList.add(className);
      sendToParent("CLASS_ADDED", {
        className,
        element: getElementInfo(state.selectedElement),
      });
    } catch (error) {
      sendToParent("ERROR", { message: error.message });
    }
  }

  // Удалить классы по префиксу
  function removeClassByPrefix(data) {
    if (!state.selectedElement) return;

    const { prefix } = data;

    try {
      // Находим все классы, начинающиеся с prefix
      const classes = Array.from(state.selectedElement.classList).filter(
        (cls) => cls.startsWith(prefix),
      );

      // Удаляем найденные классы
      classes.forEach((cls) => {
        state.selectedElement.classList.remove(cls);
      });

      sendToParent("CLASSES_REMOVED", {
        prefix,
        removedClasses: classes,
        element: getElementInfo(state.selectedElement),
      });
    } catch (error) {
      sendToParent("ERROR", { message: error.message });
    }
  }

  // Обработчик сообщений от родителя
  window.addEventListener("message", (event) => {
    console.log("MESSAGE FROM PARENT", event.data);
    const { type, data } = event.data;

    switch (type) {
      case "ACTIVATE":
        activate();
        break;

      case "DEACTIVATE":
        deactivate();
        break;

      case "UPDATE_ELEMENT":
        updateElement(data);
        break;

      case "ADD_CLASS":
        addClass(data);
        break;

      case "REMOVE_CLASS_BY_PREFIX":
        removeClassByPrefix(data);
        break;

      case "GET_SELECTED":
        if (state.selectedElement) {
          sendToParent(
            "SELECTED_ELEMENT",
            getElementInfo(state.selectedElement),
          );
        }
        break;
    }
  });

  // Уведомляем родителя, что скрипт загружен
  sendToParent("READY", { version: "1.1.0" });
})();
