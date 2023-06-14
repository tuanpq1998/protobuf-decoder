# Protobuf Decoder - npm Module

Npm module fork from [pawitp/protobuf-decoder](https://github.com/pawitp/protobuf-decoder) with small change.

## Installation

```
$ npm i git+https://github.com/tuanpq1998/protobuf-decoder.git
```

## Example

```javascript
import { decodeProto } from "protobuf-decoder";

decodeProto(
  Buffer.from(
    "00 1d 14 01 00 00 01 14 0c 04 a8 0e d9 7d a0 01 00 00 00 17 21 2b db 06 ba 88 01 00 00".replaceAll(
      " ",
      ""
    ),
    "hex"
  )
);
```

```json
{
  "parts": [{ "byteRange": [0, 2], "index": 0, "type": 0, "value": "29" }],
  "leftOver": {
    "type": "Buffer",
    "data": [
      20,
      1,
      0,
      0,
      1,
      20,
      12,
      4,
      168,
      14,
      217,
      125,
      160,
      1,
      0,
      0,
      0,
      23,
      33,
      43,
      219,
      6,
      186,
      136,
      1,
      0,
      0
    ]
  }
}
```
