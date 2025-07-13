#!/bin/bash

# Создаем новый виртуальный хост для preview поддоменов с поддержкой WebSocket
yc alb virtual-host create \
  --name "preview-websocket-host" \
  --http-router-id ds7obo6qlkst2s2khpm8 \
  --authority "preview--*.poehali.dev" \
  --route name=preview-ws-route,http.match.path.prefix_match=/,http.route.backend_group_id=ds7skilaurbp74misd4j

echo "Virtual host created. Now we need to update it via API to add websocket support..."