const GRAPH_DATA = {
  "me": {
    "edges": [
      {
        "source": "ME1",
        "target": "disease"
      },
      {
        "source": "ME1",
        "target": "hannum_EAA"
      },
      {
        "source": "ME1",
        "target": "horvath2013_EAA"
      },
      {
        "source": "ME1",
        "target": "grimage2_EAA"
      },
      {
        "source": "ME3",
        "target": "disease"
      },
      {
        "source": "ME3",
        "target": "grimage2_EAA"
      },
      {
        "source": "ME5",
        "target": "disease"
      },
      {
        "source": "ME5",
        "target": "hannum_EAA"
      },
      {
        "source": "ME5",
        "target": "horvath2013_EAA"
      },
      {
        "source": "ME5",
        "target": "grimage2_EAA"
      },
      {
        "source": "ME6",
        "target": "disease"
      },
      {
        "source": "ME6",
        "target": "hannum_EAA"
      },
      {
        "source": "ME2",
        "target": "disease"
      },
      {
        "source": "ME2",
        "target": "hannum_EAA"
      },
      {
        "source": "ME2",
        "target": "grimage2_EAA"
      },
      {
        "source": "ME4",
        "target": "disease"
      },
      {
        "source": "ME4",
        "target": "hannum_EAA"
      },
      {
        "source": "ME4",
        "target": "grimage2_EAA"
      },
      {
        "source": "ME0",
        "target": "disease"
      },
      {
        "source": "ME0",
        "target": "hannum_EAA"
      },
      {
        "source": "ME0",
        "target": "horvath2013_EAA"
      },
      {
        "source": "ME0",
        "target": "grimage2_EAA"
      },
      {
        "source": "age",
        "target": "ME1"
      },
      {
        "source": "age",
        "target": "ME3"
      },
      {
        "source": "age",
        "target": "ME5"
      },
      {
        "source": "age",
        "target": "ME6"
      },
      {
        "source": "age",
        "target": "ME2"
      },
      {
        "source": "age",
        "target": "ME4"
      },
      {
        "source": "age",
        "target": "disease"
      },
      {
        "source": "age",
        "target": "hannum_EAA"
      },
      {
        "source": "age",
        "target": "horvath2013_EAA"
      },
      {
        "source": "age",
        "target": "grimage2_EAA"
      },
      {
        "source": "sex",
        "target": "ME1"
      },
      {
        "source": "sex",
        "target": "ME3"
      },
      {
        "source": "sex",
        "target": "ME5"
      },
      {
        "source": "sex",
        "target": "ME2"
      },
      {
        "source": "sex",
        "target": "ME4"
      },
      {
        "source": "sex",
        "target": "ME0"
      },
      {
        "source": "sex",
        "target": "hannum_EAA"
      },
      {
        "source": "sex",
        "target": "horvath2013_EAA"
      },
      {
        "source": "hannum_EAA",
        "target": "disease"
      },
      {
        "source": "grimage2_EAA",
        "target": "disease"
      }
    ]
  },
  "gene": {
    "edges": [
      {
        "source": "age",
        "target": "disease"
      },
      {
        "source": "age",
        "target": "hannum_EAA"
      },
      {
        "source": "age",
        "target": "grimage2_EAA"
      },
      {
        "source": "age",
        "target": "CASP10"
      },
      {
        "source": "age",
        "target": "CD302"
      },
      {
        "source": "age",
        "target": "EN1"
      },
      {
        "source": "age",
        "target": "EPHA5"
      },
      {
        "source": "age",
        "target": "FOXA1"
      },
      {
        "source": "age",
        "target": "FOXG1"
      },
      {
        "source": "age",
        "target": "GABRG3"
      },
      {
        "source": "age",
        "target": "GRIA2"
      },
      {
        "source": "age",
        "target": "GRM7"
      },
      {
        "source": "age",
        "target": "HAND2"
      },
      {
        "source": "age",
        "target": "LRRTM1"
      },
      {
        "source": "age",
        "target": "MDGA2"
      },
      {
        "source": "age",
        "target": "MIR124-2"
      },
      {
        "source": "age",
        "target": "PAX6"
      },
      {
        "source": "age",
        "target": "RAB32"
      },
      {
        "source": "age",
        "target": "SIM1"
      },
      {
        "source": "age",
        "target": "TBX18"
      },
      {
        "source": "age",
        "target": "TNXB"
      },
      {
        "source": "age",
        "target": "TREML2"
      },
      {
        "source": "age",
        "target": "VSTM2A"
      },
      {
        "source": "age",
        "target": "ZIC1"
      },
      {
        "source": "age",
        "target": "ZIC4"
      },
      {
        "source": "sex",
        "target": "hannum_EAA"
      },
      {
        "source": "sex",
        "target": "horvath2013_EAA"
      },
      {
        "source": "sex",
        "target": "C15orf62"
      },
      {
        "source": "sex",
        "target": "CD302"
      },
      {
        "source": "sex",
        "target": "DBX1"
      },
      {
        "source": "sex",
        "target": "FOXA1"
      },
      {
        "source": "sex",
        "target": "FOXG1"
      },
      {
        "source": "sex",
        "target": "GRM7"
      },
      {
        "source": "sex",
        "target": "LYPD1"
      },
      {
        "source": "sex",
        "target": "NR2F2"
      },
      {
        "source": "sex",
        "target": "PAX6"
      },
      {
        "source": "sex",
        "target": "PSMB8"
      },
      {
        "source": "sex",
        "target": "SIAH2"
      },
      {
        "source": "sex",
        "target": "TBX18"
      },
      {
        "source": "sex",
        "target": "TNXB"
      },
      {
        "source": "sex",
        "target": "ZIC1"
      },
      {
        "source": "hannum_EAA",
        "target": "disease"
      },
      {
        "source": "grimage2_EAA",
        "target": "disease"
      },
      {
        "source": "AKAP7",
        "target": "disease"
      },
      {
        "source": "AKAP7",
        "target": "hannum_EAA"
      },
      {
        "source": "AKAP7",
        "target": "grimage2_EAA"
      },
      {
        "source": "C15orf62",
        "target": "disease"
      },
      {
        "source": "C15orf62",
        "target": "hannum_EAA"
      },
      {
        "source": "C15orf62",
        "target": "grimage2_EAA"
      },
      {
        "source": "CASP10",
        "target": "disease"
      },
      {
        "source": "CASP10",
        "target": "hannum_EAA"
      },
      {
        "source": "CASP10",
        "target": "grimage2_EAA"
      },
      {
        "source": "CD302",
        "target": "disease"
      },
      {
        "source": "CD302",
        "target": "hannum_EAA"
      },
      {
        "source": "CD302",
        "target": "grimage2_EAA"
      },
      {
        "source": "CDH8",
        "target": "disease"
      },
      {
        "source": "CDH8",
        "target": "grimage2_EAA"
      },
      {
        "source": "DBX1",
        "target": "disease"
      },
      {
        "source": "DBX1",
        "target": "hannum_EAA"
      },
      {
        "source": "DBX1",
        "target": "grimage2_EAA"
      },
      {
        "source": "EN1",
        "target": "disease"
      },
      {
        "source": "EN1",
        "target": "hannum_EAA"
      },
      {
        "source": "EPHA5",
        "target": "disease"
      },
      {
        "source": "EPHA5",
        "target": "hannum_EAA"
      },
      {
        "source": "EPHA5",
        "target": "grimage2_EAA"
      },
      {
        "source": "ESRRG",
        "target": "disease"
      },
      {
        "source": "ESRRG",
        "target": "hannum_EAA"
      },
      {
        "source": "ESRRG",
        "target": "grimage2_EAA"
      },
      {
        "source": "FEZF1",
        "target": "disease"
      },
      {
        "source": "FEZF1",
        "target": "hannum_EAA"
      },
      {
        "source": "FEZF1",
        "target": "grimage2_EAA"
      },
      {
        "source": "FOXA1",
        "target": "disease"
      },
      {
        "source": "FOXG1",
        "target": "disease"
      },
      {
        "source": "FOXG1",
        "target": "hannum_EAA"
      },
      {
        "source": "FOXG1",
        "target": "grimage2_EAA"
      },
      {
        "source": "GABRG3",
        "target": "disease"
      },
      {
        "source": "GABRG3",
        "target": "horvath2013_EAA"
      },
      {
        "source": "GABRG3",
        "target": "grimage2_EAA"
      },
      {
        "source": "GBX2",
        "target": "disease"
      },
      {
        "source": "GBX2",
        "target": "hannum_EAA"
      },
      {
        "source": "GRIA2",
        "target": "disease"
      },
      {
        "source": "GRIA2",
        "target": "hannum_EAA"
      },
      {
        "source": "GRM7",
        "target": "disease"
      },
      {
        "source": "GRM7",
        "target": "horvath2013_EAA"
      },
      {
        "source": "HAND2",
        "target": "disease"
      },
      {
        "source": "HAND2",
        "target": "hannum_EAA"
      },
      {
        "source": "HAND2",
        "target": "grimage2_EAA"
      },
      {
        "source": "ISL1",
        "target": "disease"
      },
      {
        "source": "ISL1",
        "target": "hannum_EAA"
      },
      {
        "source": "LRRTM1",
        "target": "disease"
      },
      {
        "source": "LRRTM1",
        "target": "hannum_EAA"
      },
      {
        "source": "LYPD1",
        "target": "disease"
      },
      {
        "source": "LYPD1",
        "target": "hannum_EAA"
      },
      {
        "source": "MDGA2",
        "target": "disease"
      },
      {
        "source": "MDGA2",
        "target": "hannum_EAA"
      },
      {
        "source": "MIR124-2",
        "target": "disease"
      },
      {
        "source": "MSX2",
        "target": "disease"
      },
      {
        "source": "MSX2",
        "target": "hannum_EAA"
      },
      {
        "source": "NR2F2",
        "target": "disease"
      },
      {
        "source": "NR2F2",
        "target": "hannum_EAA"
      },
      {
        "source": "NR2F2",
        "target": "grimage2_EAA"
      },
      {
        "source": "OTX1",
        "target": "disease"
      },
      {
        "source": "OTX1",
        "target": "hannum_EAA"
      },
      {
        "source": "OTX1",
        "target": "grimage2_EAA"
      },
      {
        "source": "PAX6",
        "target": "disease"
      },
      {
        "source": "PAX6",
        "target": "hannum_EAA"
      },
      {
        "source": "PAX6",
        "target": "grimage2_EAA"
      },
      {
        "source": "PAX9",
        "target": "disease"
      },
      {
        "source": "PAX9",
        "target": "hannum_EAA"
      },
      {
        "source": "PAX9",
        "target": "grimage2_EAA"
      },
      {
        "source": "PCDH10",
        "target": "disease"
      },
      {
        "source": "PCDH10",
        "target": "hannum_EAA"
      },
      {
        "source": "PITX2",
        "target": "disease"
      },
      {
        "source": "PITX2",
        "target": "hannum_EAA"
      },
      {
        "source": "PRDM13",
        "target": "disease"
      },
      {
        "source": "PRDM13",
        "target": "hannum_EAA"
      },
      {
        "source": "PRDM13",
        "target": "grimage2_EAA"
      },
      {
        "source": "PSMB8",
        "target": "disease"
      },
      {
        "source": "PSMB8",
        "target": "hannum_EAA"
      },
      {
        "source": "PSMB8",
        "target": "horvath2013_EAA"
      },
      {
        "source": "PSMB8",
        "target": "grimage2_EAA"
      },
      {
        "source": "PTF1A",
        "target": "disease"
      },
      {
        "source": "PTF1A",
        "target": "hannum_EAA"
      },
      {
        "source": "RAB32",
        "target": "disease"
      },
      {
        "source": "RAB32",
        "target": "hannum_EAA"
      },
      {
        "source": "RAB32",
        "target": "grimage2_EAA"
      },
      {
        "source": "SIAH2",
        "target": "disease"
      },
      {
        "source": "SIAH2",
        "target": "hannum_EAA"
      },
      {
        "source": "SIAH2",
        "target": "horvath2013_EAA"
      },
      {
        "source": "SIAH2",
        "target": "grimage2_EAA"
      },
      {
        "source": "SIM1",
        "target": "disease"
      },
      {
        "source": "SIM1",
        "target": "hannum_EAA"
      },
      {
        "source": "SIX3",
        "target": "disease"
      },
      {
        "source": "SIX3",
        "target": "hannum_EAA"
      },
      {
        "source": "SIX3",
        "target": "grimage2_EAA"
      },
      {
        "source": "SLIT2",
        "target": "disease"
      },
      {
        "source": "SLIT2",
        "target": "hannum_EAA"
      },
      {
        "source": "SLIT2",
        "target": "grimage2_EAA"
      },
      {
        "source": "SOX11",
        "target": "disease"
      },
      {
        "source": "SOX11",
        "target": "hannum_EAA"
      },
      {
        "source": "SOX17",
        "target": "disease"
      },
      {
        "source": "SOX17",
        "target": "hannum_EAA"
      },
      {
        "source": "TBX15",
        "target": "disease"
      },
      {
        "source": "TBX15",
        "target": "hannum_EAA"
      },
      {
        "source": "TBX15",
        "target": "grimage2_EAA"
      },
      {
        "source": "TBX18",
        "target": "disease"
      },
      {
        "source": "TBX18",
        "target": "hannum_EAA"
      },
      {
        "source": "TBX18",
        "target": "grimage2_EAA"
      },
      {
        "source": "TBX5",
        "target": "disease"
      },
      {
        "source": "TBX5",
        "target": "hannum_EAA"
      },
      {
        "source": "TFAP2B",
        "target": "disease"
      },
      {
        "source": "TFAP2B",
        "target": "hannum_EAA"
      },
      {
        "source": "TFAP2B",
        "target": "grimage2_EAA"
      },
      {
        "source": "TNXB",
        "target": "disease"
      },
      {
        "source": "TREML2",
        "target": "disease"
      },
      {
        "source": "TREML2",
        "target": "grimage2_EAA"
      },
      {
        "source": "VSTM2A",
        "target": "disease"
      },
      {
        "source": "VSTM2A",
        "target": "hannum_EAA"
      },
      {
        "source": "VSTM2A",
        "target": "grimage2_EAA"
      },
      {
        "source": "ZFPM2",
        "target": "disease"
      },
      {
        "source": "ZIC1",
        "target": "disease"
      },
      {
        "source": "ZIC1",
        "target": "horvath2013_EAA"
      },
      {
        "source": "ZIC4",
        "target": "disease"
      },
      {
        "source": "ZIC4",
        "target": "hannum_EAA"
      },
      {
        "source": "ZIC4",
        "target": "horvath2013_EAA"
      },
      {
        "source": "ZIC4",
        "target": "grimage2_EAA"
      },
      {
        "source": "ZNF454",
        "target": "disease"
      },
      {
        "source": "ZNF454",
        "target": "grimage2_EAA"
      }
    ]
  },
  "dmr": {
    "edges": [
      {
        "source": "chr1_DMR_416",
        "target": "chr1_DMR_194"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr2_DMR_64"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr11_DMR_636"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr11_DMR_972"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr1_DMR_1809"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr3_DMR_1117"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr3_DMR_1176"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr4_DMR_5"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr4_DMR_36"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr15_DMR_429"
      },
      {
        "source": "chr1_DMR_416",
        "target": "chr15_DMR_733"
      },
      {
        "source": "chr1_DMR_2065",
        "target": "chr2_DMR_204"
      },
      {
        "source": "chr2_DMR_6",
        "target": "chr6_DMR_587"
      },
      {
        "source": "chr2_DMR_6",
        "target": "hannum_EAA"
      },
      {
        "source": "chr2_DMR_6",
        "target": "grimage2_EAA"
      },
      {
        "source": "chr2_DMR_19",
        "target": "chr6_DMR_587"
      },
      {
        "source": "chr2_DMR_64",
        "target": "chr1_DMR_194"
      },
      {
        "source": "chr2_DMR_64",
        "target": "chr2_DMR_204"
      },
      {
        "source": "chr2_DMR_64",
        "target": "chr6_DMR_392"
      },
      {
        "source": "chr2_DMR_64",
        "target": "chr11_DMR_636"
      },
      {
        "source": "chr2_DMR_64",
        "target": "chr4_DMR_470"
      },
      {
        "source": "chr3_DMR_63",
        "target": "chr2_DMR_6"
      },
      {
        "source": "chr3_DMR_63",
        "target": "chr2_DMR_19"
      },
      {
        "source": "chr3_DMR_63",
        "target": "chr6_DMR_161"
      },
      {
        "source": "chr3_DMR_63",
        "target": "chr11_DMR_1280"
      },
      {
        "source": "chr3_DMR_63",
        "target": "chr15_DMR_5"
      },
      {
        "source": "chr3_DMR_63",
        "target": "chr4_DMR_36"
      },
      {
        "source": "chr3_DMR_156",
        "target": "chr1_DMR_2053"
      },
      {
        "source": "chr3_DMR_156",
        "target": "horvath2013_EAA"
      },
      {
        "source": "chr3_DMR_161",
        "target": "chr1_DMR_2053"
      },
      {
        "source": "chr3_DMR_161",
        "target": "chr11_DMR_636"
      },
      {
        "source": "chr3_DMR_161",
        "target": "chr15_DMR_196"
      },
      {
        "source": "chr3_DMR_553",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr3_DMR_553",
        "target": "chr11_DMR_972"
      },
      {
        "source": "chr3_DMR_553",
        "target": "chr4_DMR_470"
      },
      {
        "source": "chr3_DMR_553",
        "target": "chr15_DMR_477"
      },
      {
        "source": "chr3_DMR_553",
        "target": "chr15_DMR_733"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr1_DMR_1542"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr2_DMR_64"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr6_DMR_635"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr11_DMR_1280"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr3_DMR_839"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr6_DMR_587"
      },
      {
        "source": "chr3_DMR_727",
        "target": "chr15_DMR_429"
      },
      {
        "source": "chr3_DMR_727",
        "target": "hannum_EAA"
      },
      {
        "source": "chr3_DMR_889",
        "target": "chr3_DMR_1117"
      },
      {
        "source": "chr4_DMR_669",
        "target": "chr3_DMR_1117"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr1_DMR_194"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr1_DMR_416"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr2_DMR_6"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr2_DMR_19"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr2_DMR_64"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr3_DMR_727"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr6_DMR_202"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr11_DMR_1125"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr11_DMR_1280"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr4_DMR_36"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr11_DMR_931"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr15_DMR_512"
      },
      {
        "source": "chr6_DMR_9",
        "target": "chr15_DMR_733"
      },
      {
        "source": "chr6_DMR_9",
        "target": "hannum_EAA"
      },
      {
        "source": "chr6_DMR_9",
        "target": "horvath2013_EAA"
      },
      {
        "source": "chr6_DMR_392",
        "target": "chr11_DMR_972"
      },
      {
        "source": "chr6_DMR_392",
        "target": "chr4_DMR_470"
      },
      {
        "source": "chr6_DMR_392",
        "target": "chr15_DMR_661"
      },
      {
        "source": "chr6_DMR_576",
        "target": "chr2_DMR_204"
      },
      {
        "source": "chr6_DMR_576",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr6_DMR_576",
        "target": "chr3_DMR_553"
      },
      {
        "source": "chr6_DMR_576",
        "target": "chr6_DMR_392"
      },
      {
        "source": "chr6_DMR_576",
        "target": "chr15_DMR_697"
      },
      {
        "source": "chr6_DMR_635",
        "target": "chr2_DMR_6"
      },
      {
        "source": "chr6_DMR_635",
        "target": "chr3_DMR_1117"
      },
      {
        "source": "chr6_DMR_635",
        "target": "chr4_DMR_470"
      },
      {
        "source": "chr6_DMR_635",
        "target": "chr15_DMR_733"
      },
      {
        "source": "chr6_DMR_635",
        "target": "horvath2013_EAA"
      },
      {
        "source": "chr6_DMR_635",
        "target": "grimage2_EAA"
      },
      {
        "source": "chr11_DMR_548",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr11_DMR_925",
        "target": "chr2_DMR_204"
      },
      {
        "source": "chr11_DMR_925",
        "target": "chr15_DMR_225"
      },
      {
        "source": "chr11_DMR_925",
        "target": "chr15_DMR_477"
      },
      {
        "source": "chr11_DMR_925",
        "target": "chr15_DMR_733"
      },
      {
        "source": "chr11_DMR_972",
        "target": "chr3_DMR_1117"
      },
      {
        "source": "chr11_DMR_1125",
        "target": "chr11_DMR_931"
      },
      {
        "source": "chr11_DMR_1125",
        "target": "chr15_DMR_512"
      },
      {
        "source": "chr11_DMR_1201",
        "target": "hannum_EAA"
      },
      {
        "source": "chr11_DMR_1280",
        "target": "chr2_DMR_204"
      },
      {
        "source": "chr11_DMR_1280",
        "target": "chr3_DMR_631"
      },
      {
        "source": "chr11_DMR_1280",
        "target": "chr6_DMR_635"
      },
      {
        "source": "chr11_DMR_1280",
        "target": "chr15_DMR_477"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "chr2_DMR_64"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "chr3_DMR_161"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "chr3_DMR_631"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "chr6_DMR_635"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "chr15_DMR_196"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "chr11_DMR_898"
      },
      {
        "source": "chr11_DMR_1302",
        "target": "hannum_EAA"
      },
      {
        "source": "chr11_DMR_1408",
        "target": "chr3_DMR_727"
      },
      {
        "source": "chr11_DMR_1408",
        "target": "chr4_DMR_669"
      },
      {
        "source": "chr11_DMR_1408",
        "target": "chr6_DMR_9"
      },
      {
        "source": "chr11_DMR_1408",
        "target": "chr11_DMR_925"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr2_DMR_6"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr3_DMR_553"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr11_DMR_972"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr1_DMR_1745"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr15_DMR_619"
      },
      {
        "source": "chr15_DMR_247",
        "target": "chr15_DMR_697"
      },
      {
        "source": "chr3_DMR_839",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr3_DMR_839",
        "target": "chr1_DMR_1745"
      },
      {
        "source": "chr3_DMR_839",
        "target": "chr11_DMR_931"
      },
      {
        "source": "chr3_DMR_1176",
        "target": "chr3_DMR_889"
      },
      {
        "source": "chr3_DMR_1176",
        "target": "chr3_DMR_1117"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr1_DMR_194"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr2_DMR_6"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr3_DMR_631"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr6_DMR_202"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr15_DMR_5"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr4_DMR_5"
      },
      {
        "source": "chr4_DMR_36",
        "target": "chr15_DMR_652"
      },
      {
        "source": "chr4_DMR_36",
        "target": "hannum_EAA"
      },
      {
        "source": "chr4_DMR_36",
        "target": "grimage2_EAA"
      },
      {
        "source": "chr4_DMR_94",
        "target": "chr2_DMR_6"
      },
      {
        "source": "chr4_DMR_94",
        "target": "chr4_DMR_5"
      },
      {
        "source": "chr4_DMR_216",
        "target": "chr1_DMR_194"
      },
      {
        "source": "chr4_DMR_216",
        "target": "chr2_DMR_64"
      },
      {
        "source": "chr4_DMR_216",
        "target": "chr11_DMR_636"
      },
      {
        "source": "chr4_DMR_216",
        "target": "chr4_DMR_5"
      },
      {
        "source": "chr4_DMR_216",
        "target": "chr4_DMR_470"
      },
      {
        "source": "chr6_DMR_263",
        "target": "chr6_DMR_635"
      },
      {
        "source": "chr6_DMR_263",
        "target": "chr1_DMR_1316"
      },
      {
        "source": "chr6_DMR_263",
        "target": "chr1_DMR_1809"
      },
      {
        "source": "chr6_DMR_263",
        "target": "chr4_DMR_5"
      },
      {
        "source": "chr6_DMR_263",
        "target": "chr4_DMR_36"
      },
      {
        "source": "chr6_DMR_587",
        "target": "hannum_EAA"
      },
      {
        "source": "chr6_DMR_1111",
        "target": "chr3_DMR_156"
      },
      {
        "source": "chr6_DMR_1111",
        "target": "chr6_DMR_202"
      },
      {
        "source": "chr6_DMR_1111",
        "target": "chr11_DMR_1125"
      },
      {
        "source": "chr6_DMR_1111",
        "target": "chr15_DMR_477"
      },
      {
        "source": "chr11_DMR_898",
        "target": "chr11_DMR_636"
      },
      {
        "source": "chr11_DMR_898",
        "target": "chr1_DMR_1316"
      },
      {
        "source": "chr11_DMR_931",
        "target": "grimage2_EAA"
      },
      {
        "source": "chr15_DMR_429",
        "target": "chr11_DMR_548"
      },
      {
        "source": "chr15_DMR_512",
        "target": "hannum_EAA"
      },
      {
        "source": "chr15_DMR_697",
        "target": "chr11_DMR_931"
      },
      {
        "source": "chr15_DMR_733",
        "target": "horvath2013_EAA"
      },
      {
        "source": "age",
        "target": "chr2_DMR_6"
      },
      {
        "source": "age",
        "target": "chr2_DMR_19"
      },
      {
        "source": "age",
        "target": "chr3_DMR_161"
      },
      {
        "source": "age",
        "target": "chr3_DMR_889"
      },
      {
        "source": "age",
        "target": "chr11_DMR_925"
      },
      {
        "source": "age",
        "target": "chr11_DMR_1125"
      },
      {
        "source": "age",
        "target": "chr1_DMR_1316"
      },
      {
        "source": "age",
        "target": "chr3_DMR_1176"
      },
      {
        "source": "age",
        "target": "chr4_DMR_36"
      },
      {
        "source": "age",
        "target": "chr6_DMR_1111"
      },
      {
        "source": "age",
        "target": "chr15_DMR_429"
      },
      {
        "source": "age",
        "target": "chr15_DMR_512"
      },
      {
        "source": "age",
        "target": "hannum_EAA"
      },
      {
        "source": "age",
        "target": "grimage2_EAA"
      },
      {
        "source": "age",
        "target": "disease"
      },
      {
        "source": "sex",
        "target": "chr1_DMR_416"
      },
      {
        "source": "sex",
        "target": "chr1_DMR_2065"
      },
      {
        "source": "sex",
        "target": "chr3_DMR_63"
      },
      {
        "source": "sex",
        "target": "chr3_DMR_161"
      },
      {
        "source": "sex",
        "target": "chr3_DMR_727"
      },
      {
        "source": "sex",
        "target": "chr6_DMR_9"
      },
      {
        "source": "sex",
        "target": "chr6_DMR_576"
      },
      {
        "source": "sex",
        "target": "chr11_DMR_1125"
      },
      {
        "source": "sex",
        "target": "chr11_DMR_1302"
      },
      {
        "source": "sex",
        "target": "chr11_DMR_1408"
      },
      {
        "source": "sex",
        "target": "chr15_DMR_196"
      },
      {
        "source": "sex",
        "target": "chr15_DMR_247"
      },
      {
        "source": "sex",
        "target": "chr3_DMR_839"
      },
      {
        "source": "sex",
        "target": "chr3_DMR_1176"
      },
      {
        "source": "sex",
        "target": "chr4_DMR_36"
      },
      {
        "source": "sex",
        "target": "chr4_DMR_94"
      },
      {
        "source": "sex",
        "target": "chr4_DMR_216"
      },
      {
        "source": "sex",
        "target": "chr6_DMR_263"
      },
      {
        "source": "sex",
        "target": "chr6_DMR_1111"
      },
      {
        "source": "sex",
        "target": "chr11_DMR_898"
      },
      {
        "source": "sex",
        "target": "chr15_DMR_429"
      },
      {
        "source": "sex",
        "target": "horvath2013_EAA"
      },
      {
        "source": "hannum_EAA",
        "target": "disease"
      },
      {
        "source": "grimage2_EAA",
        "target": "disease"
      }
    ]
  }
};

// Total edges:
// ME: 42
// Genes: 168
// DMRs: 185
