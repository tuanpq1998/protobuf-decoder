const decoder = require("./src/protobufDecoder.js");

console.log(
  JSON.stringify(
    decoder.decodeProto(
      Buffer.from(
        "0900127a0000000000110010d0862386be0720d690c0d0063152340dba88010000480350f90f5a060a04393936396229180028003000380042060a00120018004a060a001200180050005800600068008001009001009801019001009a0100a00100aa0100b00100ba0100".replaceAll(
          " ",
          ""
        ),
        "hex"
      )
    )
  )
);
