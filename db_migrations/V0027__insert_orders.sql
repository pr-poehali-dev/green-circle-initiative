-- Добавляем тестовые заказы
INSERT INTO "t_p9999_admin".orders (customer_id, order_number, total_amount, status, delivery_date, notes) VALUES 
(1, 'ORD-2025-001', 15990.00, 'completed', '2025-09-15', 'Доставка курьером'),
(1, 'ORD-2025-002', 2500.50, 'pending', '2025-09-18', 'Самовывоз из пункта'),
(2, 'ORD-2025-003', 89990.00, 'shipped', '2025-09-20', 'Доставка в офис'),
(3, 'ORD-2025-004', 1250.00, 'cancelled', NULL, 'Отменен по просьбе клиента'),
(2, 'ORD-2025-005', 45500.00, 'processing', '2025-09-22', 'Срочный заказ');