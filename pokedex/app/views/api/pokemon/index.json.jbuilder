
json.array! @pokemon do |poke|
  json.extract! poke, :id, :name
  json.image_url asset_path(poke.image_url)
end
