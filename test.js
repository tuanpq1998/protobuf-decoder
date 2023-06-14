import { decodeProto } from "./src/protobufDecoder.js";

console.log(
  JSON.stringify(
    decodeProto(
      Buffer.from(
        "00 1d 14 01 00 00 01 14 0c 04 a8 0e d9 7d a0 01 00 00 00 17 21 2b db 06 ba 88 01 00 00".replaceAll(
          " ",
          ""
        ),
        "hex"
      )
    )
  )
);
