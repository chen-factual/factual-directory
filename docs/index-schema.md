# Index API Schema

Notes:
* by default, ```url``` is used as `id`
* timestamp is in ms. If none is given, one will be provided

```json
{
  "id": "unique_identifier",
  "url": "http://wiki.corp.factual.com/",
  "keywords": ["wiki"],
  "description": "Factual Wiki",
  "corpus": "Body of document, should be empty for top level domains like the wiki",
  "manual_tags": [],
  "timestamp": 1469054237
}
```