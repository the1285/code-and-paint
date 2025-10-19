export const DEMO_WORKSPACE = {
  blocks: {
    languageVersion: 0,
    blocks: [
      {
        type: "math_change",
        id: ":Ed]agyU}AOVH$5~y:`+",
        x: 145,
        y: 112,
        fields: {
          VAR: {
            id: "|)mVMphiQLFN2ERz3n]P",
          },
        },
        inputs: {
          DELTA: {
            shadow: {
              type: "math_number",
              id: "PtM4P]WWnMrq?cp8CIzD",
              fields: {
                NUM: 0,
              },
            },
          },
        },
        next: {
          block: {
            type: "canvas_stroke_settings",
            id: "3DdkvMCL=p,J?soGG{:^",
            fields: {
              CAP: "round",
              JOIN: "round",
            },
            inputs: {
              WIDTH: {
                block: {
                  type: "math_number",
                  id: "Fo11iDp!NTuZ#Z,yuNm(",
                  fields: {
                    NUM: 7,
                  },
                },
              },
            },
            next: {
              block: {
                type: "math_change",
                id: "hX`^$VamV}YLqj)rbHm2",
                fields: {
                  VAR: {
                    id: "5vRW$!QpHMglV]Xk*i^c",
                  },
                },
                inputs: {
                  DELTA: {
                    shadow: {
                      type: "math_number",
                      id: "!Z}VEUvs[g|uLxvL#`!T",
                      fields: {
                        NUM: 1,
                      },
                    },
                    block: {
                      type: "math_number",
                      id: "#d8!R/j?6Ok`4m,5,`{L",
                      fields: {
                        NUM: 720,
                      },
                    },
                  },
                },
                next: {
                  block: {
                    type: "variables_set",
                    id: ",s}!#vre[n8eK(lkx^s`",
                    fields: {
                      VAR: {
                        id: "YAQP$5hb7:@?#jg-ZnLL",
                      },
                    },
                    inputs: {
                      VALUE: {
                        block: {
                          type: "math_arithmetic",
                          id: "?Bs1[.Cvj;}:II-aHD?%",
                          fields: {
                            OP: "DIVIDE",
                          },
                          inputs: {
                            A: {
                              block: {
                                type: "math_number",
                                id: "g!,.|#Z@756iI9Bh};Z?",
                                fields: {
                                  NUM: 360,
                                },
                              },
                            },
                            B: {
                              block: {
                                type: "variables_get",
                                id: ")jh(V~2i/m;L`lAeb23q",
                                fields: {
                                  VAR: {
                                    id: "5vRW$!QpHMglV]Xk*i^c",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    next: {
                      block: {
                        type: "controls_repeat_ext",
                        id: "oB[i*XGb$b{B88Hd,jjy",
                        inputs: {
                          TIMES: {
                            block: {
                              type: "variables_get",
                              id: "7}?ya8-(F=%^d.{W#$Kl",
                              fields: {
                                VAR: {
                                  id: "5vRW$!QpHMglV]Xk*i^c",
                                },
                              },
                            },
                          },
                          DO: {
                            block: {
                              type: "variables_set",
                              id: "BhXzG48(lAp$oEVug+Gp",
                              fields: {
                                VAR: {
                                  id: "=c@;+8fh58,wW8(|H{r.",
                                },
                              },
                              inputs: {
                                VALUE: {
                                  block: {
                                    type: "math_arithmetic",
                                    id: ",xeP_${-XCLJHY](a4mT",
                                    fields: {
                                      OP: "MULTIPLY",
                                    },
                                    inputs: {
                                      A: {
                                        block: {
                                          type: "variables_get",
                                          id: "(dAer@*M9S+kOT=(a`+)",
                                          fields: {
                                            VAR: {
                                              id: "|)mVMphiQLFN2ERz3n]P",
                                            },
                                          },
                                        },
                                      },
                                      B: {
                                        block: {
                                          type: "variables_get",
                                          id: "Sp|`8AdRC@,k-^D9b_JC",
                                          fields: {
                                            VAR: {
                                              id: "YAQP$5hb7:@?#jg-ZnLL",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              next: {
                                block: {
                                  type: "stroke_style",
                                  id: "EY||jB6p30P;.LbEs:~X",
                                  inputs: {
                                    STYLE: {
                                      block: {
                                        type: "canvas_color_hsl",
                                        id: "N,FFm+|J#hJ54)wB-4=#",
                                        inputs: {
                                          H: {
                                            block: {
                                              type: "variables_get",
                                              id: "2l8deAep6_=ipN#Cn?+B",
                                              fields: {
                                                VAR: {
                                                  id: "=c@;+8fh58,wW8(|H{r.",
                                                },
                                              },
                                            },
                                          },
                                          S: {
                                            block: {
                                              type: "math_number",
                                              id: "07l[CDQwms}8`pV+Oqwo",
                                              fields: {
                                                NUM: 50,
                                              },
                                            },
                                          },
                                          L: {
                                            block: {
                                              type: "math_number",
                                              id: "gblme2Ij%k~99u6hHubE",
                                              fields: {
                                                NUM: 50,
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  next: {
                                    block: {
                                      type: "begin_path",
                                      id: "BD_s7%fU2|JHc]v4bt.6",
                                      next: {
                                        block: {
                                          type: "move_to",
                                          id: "{yA{~kid:Pb+}-.v#(c!",
                                          inputs: {
                                            XY: {
                                              block: {
                                                type: "coord_tuple",
                                                id: "wGHfbFLiL+qdvZR;x|j{",
                                                inputs: {
                                                  Y: {
                                                    block: {
                                                      type: "math_number",
                                                      id: "|X3|P#:.WPD`o%5:gy;7",
                                                      fields: {
                                                        NUM: 525,
                                                      },
                                                    },
                                                  },
                                                  X: {
                                                    block: {
                                                      type: "math_number",
                                                      id: "UL2~4!MIKz6W9s0J+:]m",
                                                      fields: {
                                                        NUM: 525,
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          next: {
                                            block: {
                                              type: "line_to",
                                              id: "K%pHL$vUA}N[KG[Yb]@V",
                                              inputs: {
                                                XY: {
                                                  block: {
                                                    type: "procedures_callreturn",
                                                    id: "0IY6DATNpQsfwXoK?mE6",
                                                    extraState: {
                                                      name: "مختصات قطبی",
                                                      params: [
                                                        "زاویه",
                                                        "فاصله",
                                                      ],
                                                    },
                                                    inputs: {
                                                      ARG0: {
                                                        block: {
                                                          type: "variables_get",
                                                          id: "gjMe;obt+7Ou/2F{ZLjn",
                                                          fields: {
                                                            VAR: {
                                                              id: "=c@;+8fh58,wW8(|H{r.",
                                                            },
                                                          },
                                                        },
                                                      },
                                                      ARG1: {
                                                        block: {
                                                          type: "math_number",
                                                          id: "I:=;`,rTe?cEQ|T1`jie",
                                                          fields: {
                                                            NUM: 50,
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              next: {
                                                block: {
                                                  type: "stroke",
                                                  id: "[VPjob]Va:(p$0pVt9/o",
                                                  next: {
                                                    block: {
                                                      type: "math_change",
                                                      id: "qb@fekwoX{)FTuyQd=}f",
                                                      fields: {
                                                        VAR: {
                                                          id: "|)mVMphiQLFN2ERz3n]P",
                                                        },
                                                      },
                                                      inputs: {
                                                        DELTA: {
                                                          shadow: {
                                                            type: "math_number",
                                                            id: "QF1$!0D1)E`cmL=+ewfb",
                                                            fields: {
                                                              NUM: 1,
                                                            },
                                                          },
                                                          block: {
                                                            type: "math_arithmetic",
                                                            id: "?5%Lkb*GZ!v|9jYy%2zM",
                                                            fields: {
                                                              OP: "ADD",
                                                            },
                                                            inputs: {
                                                              A: {
                                                                block: {
                                                                  type: "variables_get",
                                                                  id: "xq*5nk*KrRJ,#uA.:OAr",
                                                                  fields: {
                                                                    VAR: {
                                                                      id: "|)mVMphiQLFN2ERz3n]P",
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              B: {
                                                                block: {
                                                                  type: "math_number",
                                                                  id: ")o5Ze:A/|P/s@yYw`|F$",
                                                                  fields: {
                                                                    NUM: 1,
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      {
        type: "procedures_defreturn",
        id: "0J9ZH,XwC$xOjD)(~:S[",
        x: 671,
        y: 660,
        extraState: {
          params: [
            {
              name: "زاویه",
              id: "S|iiG?#EaiwIZLH!I/Bx",
            },
            {
              name: "فاصله",
              id: "bwa/U_WkZF|[*:wB+d=y",
            },
          ],
        },
        icons: {
          comment: {
            text: "توصیف این عملکرد...",
            pinned: false,
            height: 80,
            width: 160,
          },
        },
        fields: {
          NAME: "مختصات قطبی",
        },
        inputs: {
          STACK: {
            block: {
              type: "variables_set",
              id: "4IA^cNjMGlE|XH}a-MW9",
              fields: {
                VAR: {
                  id: "Q,V1p]4`{p):XSqJSpB;",
                },
              },
              inputs: {
                VALUE: {
                  block: {
                    type: "math_arithmetic",
                    id: "6;rM(TovErxckboxB?%7",
                    fields: {
                      OP: "ADD",
                    },
                    inputs: {
                      A: {
                        block: {
                          type: "math_number",
                          id: "O0PcGwgc]6ylNDI6B{!.",
                          fields: {
                            NUM: 525,
                          },
                        },
                      },
                      B: {
                        block: {
                          type: "math_arithmetic",
                          id: "a-t9[6{S]2QAukzpckRZ",
                          fields: {
                            OP: "MULTIPLY",
                          },
                          inputs: {
                            A: {
                              block: {
                                type: "math_trig",
                                id: "vRRqPO~pA0hdQ6XG1#]?",
                                fields: {
                                  OP: "SIN",
                                },
                                inputs: {
                                  NUM: {
                                    block: {
                                      type: "variables_get",
                                      id: "tfpOLnx?(2h0hoGyk@20",
                                      fields: {
                                        VAR: {
                                          id: "S|iiG?#EaiwIZLH!I/Bx",
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            B: {
                              block: {
                                type: "math_number",
                                id: "9eAlL!Am:ihp*c1=x4=1",
                                fields: {
                                  NUM: 500,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              next: {
                block: {
                  type: "variables_set",
                  id: "4;g%oe6WTvZ[Hq^tme-w",
                  fields: {
                    VAR: {
                      id: "16?Q%H3iDcM(9^Qd=_Ef",
                    },
                  },
                  inputs: {
                    VALUE: {
                      block: {
                        type: "math_arithmetic",
                        id: "W2Qlk?.3W4oNJGcM(#;|",
                        fields: {
                          OP: "ADD",
                        },
                        inputs: {
                          A: {
                            block: {
                              type: "math_number",
                              id: "#!72QfZl_h`?!VKfrCyD",
                              fields: {
                                NUM: 525,
                              },
                            },
                          },
                          B: {
                            block: {
                              type: "math_arithmetic",
                              id: "Y{IeNKj4v4z~E{hlu3fR",
                              fields: {
                                OP: "MULTIPLY",
                              },
                              inputs: {
                                A: {
                                  block: {
                                    type: "math_trig",
                                    id: "ow%u{^9%zL)e9O~,m7*)",
                                    fields: {
                                      OP: "COS",
                                    },
                                    inputs: {
                                      NUM: {
                                        block: {
                                          type: "variables_get",
                                          id: "7l|+u)ZR|E{QM~T#,sjG",
                                          fields: {
                                            VAR: {
                                              id: "S|iiG?#EaiwIZLH!I/Bx",
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                B: {
                                  block: {
                                    type: "math_number",
                                    id: "5@N8Rhdh4t/`^sEdfQ7J",
                                    fields: {
                                      NUM: 500,
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          RETURN: {
            block: {
              type: "coord_tuple",
              id: "]~{}8h4673E~Cc0-d]::",
              inputs: {
                Y: {
                  block: {
                    type: "variables_get",
                    id: "Xh7+LX8MS+EE#sIPI/KT",
                    fields: {
                      VAR: {
                        id: "16?Q%H3iDcM(9^Qd=_Ef",
                      },
                    },
                  },
                },
                X: {
                  block: {
                    type: "variables_get",
                    id: "7IXVUq`x}D}.Kc~gTl(S",
                    fields: {
                      VAR: {
                        id: "Q,V1p]4`{p):XSqJSpB;",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    ],
  },
  variables: [
    {
      name: "شمارنده حلقه",
      id: "|)mVMphiQLFN2ERz3n]P",
    },
    {
      name: "زاویه",
      id: "S|iiG?#EaiwIZLH!I/Bx",
    },
    {
      name: "فاصله",
      id: "bwa/U_WkZF|[*:wB+d=y",
    },
    {
      name: "زاوی",
      id: "MI4^/3U+]w`hFr}-1!=+",
    },
    {
      name: "فاصله عرضی",
      id: "Q,V1p]4`{p):XSqJSpB;",
    },
    {
      name: "فاصله طولی",
      id: "16?Q%H3iDcM(9^Qd=_Ef",
    },
    {
      name: "زاویه داخل حلقه",
      id: "=c@;+8fh58,wW8(|H{r.",
    },
    {
      name: "تعداد خط",
      id: "5vRW$!QpHMglV]Xk*i^c",
    },
    {
      name: "زاویه بین خطوط",
      id: "YAQP$5hb7:@?#jg-ZnLL",
    },
  ],
};
