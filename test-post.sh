# curl -d '[{"x":"20"}, {"y":"35"}, {"z":"15"}]' -H "Content-Type: application/json" -X POST http://localhost:3000/api/plot

localserver="http://localhost:3000"

function post_json {
  local payload="$1"
  local route="$2"

  local url="$localserver/$route"

  curl -d "$payload" \
    -H "Content-Type: application/json" \
    -X POST "$url"
}


command="$1"
shift

"$command" "$@"
