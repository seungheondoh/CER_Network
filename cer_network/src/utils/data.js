module.exports = {
    baseNodes : [
        { id: "MacLAB", group: 0, label: "MacLAB", level: 1 },
        { id: "도승헌"   , group: 0, label: "도승헌"   , level: 2 },
        { id: "Design"   , group: 0, label: "Design"   , level: 2 },
        { id: "Music"   , group: 0, label: "Music"   , level: 2 },
        { id: "Video"   , group: 0, label: "Video"   , level: 2 },
        { id: "Sound"   , group: 0, label: "Sound"   , level: 2 },
        { id: "water"   , group: 0, label: "water"   , level: 2 },
        { id: "vision"   , group: 0, label: "vision"   , level: 2 },
        { id: "audio"   , group: 0, label: "audio"   , level: 2 },
        { id: "light"   , group: 0, label: "light"   , level: 2 },
        { id: "color"   , group: 0, label: "color"   , level: 2 },
        { id: "김태완"   , group: 0, label: "김태완"   , level: 2 },
        { id: "이종필"   , group: 0, label: "이종필"  , level: 2 },
        { id: "박승순"   , group: 0, label: "박승순"    , level: 2 },
        { id: "ZeroOne", group: 1, label: "ZeroOne", level: 1 },
        { id: "김광진"   , group: 1, label: "김광진"   , level: 2 },
        { id: "박수진"   , group: 1, label: "박수진"   , level: 2 },
        { id: "ZeronOneLab"  , group: 2, label: "ZeronOneLab"   , level: 1 },
        { id: "김민채"  , group: 2, label: "김민채"   , level: 2 },
        { id: "강상권"  , group: 2, label: "강상권"  , level: 2 }
      ],
    baseLinks : [
        { target: "MacLAB", source: "도승헌" , strength: 0.5 },
        { target: "MacLAB", source: "김태완" , strength: 0.5 },
        { target: "MacLAB", source: "이종필" , strength: 0.5 },
        { target: "MacLAB", source: "박승순" , strength: 0.5 },
        { target: "ZeroOne", source: "김광진" , strength: 0.0001 },
        { target: "ZeroOne", source: "박수진" , strength: 0.0001 },
        { target: "ZeronOneLab"  , source: "김민채", strength: 0.0001 },
        { target: "ZeronOneLab"  , source: "강상권", strength: 0.0001 },
        { target: "김태완"   , source: "박승순" , strength: 0.0001 },
        { target: "김민채"  , source: "김광진" , strength: 0.0001 },
        { target: "박승순"   , source: "박수진" , strength: 0.0001 },
        { target: "박승순"   , source: "ZeroOne" , strength: 0.5 },
        { target: "박승순"   , source: "ZeronOneLab" , strength: 0.5 },
        { target: "도승헌"   , source: "김태완" , strength: 0.0001 },
        { target: "이종필"   , source: "ZeroOne" , strength: 0.5 },
        { target: "강상권"  , source: "김태완" , strength: 0.0001  },
        { target: "Design"  , source: "도승헌" , strength: 0.8 },
        { target: "Design"  , source: "김태완" , strength: 0.8 },
        { target: "Design"  , source: "박수진" , strength: 0.8 },
        { target: "audio"  , source: "김광진" , strength: 0.8 },
        { target: "Design"  , source: "박승순" , strength: 0.8 },
        { target: "Design"  , source: "강상권" , strength: 0.8 },
        { target: "audio"  , source: "강상권" , strength: 0.8 },
        { target: "Music"  , source: "김태완" , strength: 0.8 },
        { target: "audio"  , source: "김민채" , strength: 0.8 },
        { target: "Music"  , source: "박수진" , strength: 0.8 },
        { target: "Music"  , source: "박승순" , strength: 0.8 },
        { target: "Music"  , source: "이종필" , strength: 0.8 },
        { target: "Video"  , source: "강상권" , strength: 0.8 },
        { target: "light"  , source: "김광진" , strength: 0.8 },
        { target: "Sound"  , source: "김태완" , strength: 0.8 },
        { target: "color"  , source: "김민채" , strength: 0.8 },
        { target: "color"  , source: "박수진" , strength: 0.8 },
        { target: "color"  , source: "박승순" , strength: 0.8 },
        { target: "Sound"  , source: "도승헌" , strength: 0.8 },
        { target: "vision"  , source: "김태완" , strength: 0.8 },
        { target: "light"  , source: "박수진" , strength: 0.8 },
        { target: "water"  , source: "박수진" , strength: 0.8 },
        { target: "water"  , source: "박승순" , strength: 0.8 },
        { target: "vision"  , source: "도승헌" , strength: 0.8 },
    ]


}
