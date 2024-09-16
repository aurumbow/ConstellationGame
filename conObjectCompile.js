console.log("Loading Constellations...");

//make list for selection
const allCons = [];


//class construstor
class Constellation {
  constructor(conName, charaName, xPnts, yPnts, conImg, charaImg, element){
    this.name = conName;
    this.chara = charaName;
    this.xCoords = xPnts;
    this.yCoords = yPnts;
    this.img= conImg;
    this.sticker = charaImg;
    this.element=element;
  }
  color(){
    console.log("Element is "+this.element);
    switch (this.element){
      case "Anemo":
        return "#194d33";
        break;
      case "Geo":
        return "#663300";
        break;
      case "Electro":
        return "#4d004d";
        break;
      case "Dendro":
        return "#004d00";
        break;
      case "Hydro":
        return "#000080";
        break;
      case "Pyro":
        return "#660000";
        break;
      case "Cryo":
        return "#264d73";
        break;
      default:
        return "#696969";
    }
  }

}

//create eighty-something objects
allCons[0] = new Constellation("Viator","Traveler",[181, 230, 97, 109, 330, 430],[116, 198, 228, 399, 427, 231],"Constellations/Viator.png","Characters/Aether.png","Geo");

allCons[1] = new Constellation("Viatrix","Traveler",[302, 258, 387, 383, 183, 91],[86, 192, 249, 376, 412, 222],"Constellations/Viatrix.png","Characters/Lumine.png","Hydro");

allCons[2] = new Constellation("Lepus","Amber",[131, 142, 290, 304, 392, 351],[139, 297, 332, 146, 137, 233],"Constellations/Lepus.png","Characters/Amber.png","Pyro");

allCons[3] = new Constellation("Pavo Ocellus","Kaeya",[316, 224, 191, 396, 362, 228],[121, 128, 219, 300, 415, 442],"Constellations/Pavo_Ocellus.png","Characters/Kaeya.png","Cryo");

allCons[4] = new Constellation("Tempus Fugit","Lisa",[177, 321, 257, 257, 343, 172],[158, 158, 230, 288, 396, 391],"Constellations/Tempus_Fugit.png","Characters/Lisa.png","Electro");

allCons[5] = new Constellation("Crater","Barbara",[128, 256, 386, 256, 256, 256],[105, 73, 106, 171, 324, 434],"Constellations/Crater.png","Characters/Barbara.png","Hydro");

allCons[6] = new Constellation("Lupus Minor","Razor",[182, 303, 291, 150, 176, 279],[113, 92, 228, 329, 423, 448],"Constellations/Lupus_Minor.png","Characters/Razor.png","Electro");

allCons[7] = new Constellation("Trulla","Xiangling",[347, 259, 302, 190, 107, 113],[118, 239, 399, 422, 384, 272],"Constellations/Trulla.png","Characters/Xiangling.png","Pyro");

allCons[8] = new Constellation("Victor Mare","Beidou",[198, 337, 416, 320, 172, 103],[365, 392, 253, 151, 172, 128],"Constellations/Victor_Mare.png","Characters/Beidou.png","Electro");

allCons[9] = new Constellation("Fabulae Textile","Xingqiu",[137, 179, 240, 404, 350, 305],[365, 160, 121, 160, 215, 420],"Constellations/Fabulae_Textile.png","Characters/Xingqiu.png","Hydro");

allCons[10] = new Constellation("Opus Aequilibrium","Ningguang",[387, 222, 104, 107, 304, 434],[381, 222, 349, 117, 86, 165],"Constellations/Opus_Aequilibrium.png","Characters/Ningguang.png","Geo");

allCons[11] = new Constellation("Corvus","Fischl",[175, 109, 127, 250, 280, 411],[61, 146, 289, 318, 394, 405],"Constellations/Corvus.png","Characters/Fischl.png","Electro");

allCons[12] = new Constellation("Rota Calamitas","Bennett",[88, 228, 366, 418, 389, 250],[154, 64, 122, 231, 381, 434],"Constellations/Rota_Calamitas.png","Characters/Bennett.png","Pyro");

allCons[13] = new Constellation("Parma Cordis","Noelle",[254, 115, 129, 254, 379, 386],[85, 125, 340, 439, 340, 125],"Constellations/Parma_Cordis.png","Characters/Noelle.png","Geo");

allCons[14] = new Constellation("Nubis Caesor","Chongyun",[260, 198, 320, 250, 257, 257],[62, 170, 170, 240, 297, 454],"Constellations/Nubis_Caesor.png","Characters/Chongyun.png","Cryo");

allCons[15] = new Constellation("Ampulla","Sucrose",[143, 188, 195, 439, 325, 252],[112, 222, 465, 291, 253, 268],"Constellations/Ampulla.png","Characters/Sucrose.png","Anemo");

allCons[16] = new Constellation("Leo Minor","Jean",[238, 159, 192, 319, 356, 266],[336, 307, 209, 239, 135, 58],"Constellations/Leo_Minor.png","Characters/Jean.png","Anemo");

allCons[17] = new Constellation("Noctua","Diluc",[275, 275, 198, 144, 241, 370],[106, 237, 205, 354, 442, 403],"Constellations/Noctua.png","Characters/Diluc.png","Pyro");

allCons[18] = new Constellation("Pristina Nola","Qiqi",[353, 296, 224, 97, 291, 333],[119, 217, 226, 345, 439, 267],"Constellations/Pristina_Nola.png","Characters/Qiqi.png","Cryo");

allCons[19] = new Constellation("Astrolabos","Mona",[222, 186, 275, 433, 366, 110],[102, 226, 323, 248, 421, 409],"Constellations/Astrolabos.png","Characters/Mona.png","Hydro");

allCons[20] = new Constellation("Trulla Cementarii","Keqing",[148, 286, 369, 334, 378, 229],[231, 79, 147, 307, 378, 476],"Constellations/Trulla_Cementarii.png","Characters/Keqing.png","Electro");

allCons[21] = new Constellation("Carmen Dei","Venti",[241, 318, 409, 263, 120, 262],[111, 176, 299, 428, 365, 337],"Constellations/Carmen_Dei.png","Characters/Venti.png","Anemo");

allCons[22] = new Constellation("Trifolium","Klee",[178, 136, 313, 378, 281, 324],[340, 191, 95, 231, 277, 382],"Constellations/Trifolium.png","Characters/Klee.png","Pyro");

allCons[23] = new Constellation("Feles","Diona",[145, 181, 233, 370, 249, 135],[93, 159, 68, 277, 463, 428],"Constellations/Feles.png","Characters/Diona.png","Cryo");

allCons[24] = new Constellation("Monoceros Caeli","Tartaglia",[135, 224, 403, 297, 165, 116],[457, 376, 262, 102, 65, 111],"Constellations/Monoceros_Caeli.png","Characters/Tartaglia.png","Hydro");

allCons[25] = new Constellation("Fila Ignium","Xinyan",[404, 253, 117, 115, 270, 186],[106, 287, 298, 450, 435, 361],"Constellations/Fila_Ignium.png","Characters/Xinyan.png","Pyro");

allCons[26] = new Constellation("Lapis Dei","Zhongli",[186, 127, 259, 388, 253, 253],[241, 335, 473, 335, 150, 309],"Constellations/Lapis_Dei.png","Characters/Zhongli.png","Geo");

allCons[27] = new Constellation("Princeps Cretaceus","Albedo",[256, 216, 151, 150, 326, 256],[115, 220, 278, 428, 454, 369],"Constellations/Princeps_Cretaceus.png","Characters/Albedo.png","Geo");

allCons[28] = new Constellation("Sinae Unicornis","Ganyu",[264, 313, 381, 352, 111, 197],[254, 167, 228, 357, 288, 100],"Constellations/Sinae_Unicornis.png","Characters/Ganyu.png","Cryo");

allCons[29] = new Constellation("Alatus Nemeseos","Xiao",[272, 370, 250, 266, 140, 211],[69, 230, 299, 394, 238, 139],"Constellations/Alatus_Nemeseos.png","Characters/Xiao.png","Anemo");

allCons[30] = new Constellation("Papilio Charontis","Hu Tao",[190, 403, 166, 347, 311, 400],[77, 88, 330, 360, 465, 471],"Constellations/Papilio_Charontis.png","Characters/HuTao.png","Pyro");

allCons[31] = new Constellation("Spinea Corona","Rosaria",[134, 67, 186, 326, 459, 379],[385, 301, 204, 202, 322, 383],"Constellations/Spinea_Corona.png","Characters/Rosaria.png","Cryo");

allCons[32] = new Constellation("Bestia Iustitia","Yanfei",[142, 206, 117, 375, 234, 232],[71, 117, 243, 176, 317, 457],"Constellations/Bestia_Iustitia.png","Characters/Yanfei.png","Pyro");

allCons[33] = new Constellation("Aphros Delos","Eula",[154, 75, 294, 142, 307, 458],[80, 200, 271, 395, 449, 300],"Constellations/Aphros_Delos.png","Characters/Eula.png","Cryo");

allCons[34] = new Constellation("Acer Palmatum","Kaedehara Kazuha",[192, 101, 256, 407, 306, 256],[81, 257, 440, 253, 81, 238],"Constellations/Acer_Palmatum.png","Characters/Kazuha.png","Anemo");

allCons[35] = new Constellation("Grus Nivis","Kamisato Ayaka",[308, 375, 260, 149, 220, 242],[41, 193, 163, 245, 297, 472],"Constellations/Grus_Nivis.png","Characters/Ayaka.png","Cryo");

allCons[36] = new Constellation("Nyctereutes Minor","Sayu",[172, 195, 341, 391, 253, 120],[123, 201, 155, 296, 410, 362],"Constellations/Nyctereutes_Minor.png","Characters/Sayu.png","Anemo");

allCons[37] = new Constellation("Carassius Auratus","Yoimiya",[310, 249, 130, 108, 229, 400],[107, 295, 317, 424, 389, 270],"Constellations/Carassius_Auratus.png","Characters/Yoimiya.png","Pyro");

allCons[38] = new Constellation("Nora Fortis","Aloy",[170, 394, 157, 155, 331, 433],[156, 411, 411, 311, 161, 182],"Constellations/Nora_Fortis.png","Characters/Aloy.png","Cryo");

allCons[39] = new Constellation("Flabellum","Kujou Sara",[256, 256, 118, 394, 93, 420],[59, 290, 146, 146, 267, 267],"Constellations/Flabellum.png","Characters/Sara.png","Electro");

allCons[40] = new Constellation("Imperatrix Umbrosa","Raiden Shogun",[252, 422, 420, 256, 92, 90],[452, 348, 194, 82, 194, 348],"Constellations/Imperatrix_Umbrosa.png","Characters/Raiden.png","Electro");

allCons[41] = new Constellation("Dracaena Somnolenta","Sangonomiya Kokomi",[283, 143, 254, 412, 250, 49],[279, 218, 72, 282, 435, 267],"Constellations/Dracaena_Somnolenta.png","Characters/Kokomi.png","Hydro");

allCons[42] = new Constellation("Rubeum Scutum","Thoma",[256, 354, 444, 203, 103, 266],[110, 137, 379, 408, 233, 303],"Constellations/Rubeum_Scutum.png","Characters/Thoma.png","Pyro");

allCons[43] = new Constellation("Canis Bellatoris","Gorou",[227, 145, 211, 311, 440, 132],[100, 145, 289, 255, 446, 353],"Constellations/Canis_Bellatoris.png","Characters/Gorou.png","Geo");

allCons[44] = new Constellation("Taurus Iracundus","Arataki Itto",[100, 202, 238, 400, 177, 427],[186, 128, 334, 273, 477, 412],"Constellations/Taurus_Iracundus.png","Characters/Itto.png","Geo");

allCons[45] = new Constellation("Opera Grandis","Yun Jin",[322, 183, 43, 228, 461, 320],[263, 104, 211, 427, 268, 105],"Constellations/Opera_Grandis.png","Characters/YunJin.png","Geo");

allCons[46] = new Constellation("Crista Doloris","Shenhe",[145, 199, 429, 477, 178, 267],[314, 223, 182, 81, 381, 337],"Constellations/Crista_Doloris.png","Characters/Shenhe.png","Cryo");

allCons[47] = new Constellation("Divina Vulpes","Yae Miko",[254, 187, 254, 345, 457, 328],[188, 308, 471, 412, 215, 70],"Constellations/Divina_Vulpes.png","Characters/Miko.png","Electro");

allCons[48] = new Constellation("Cypressus Custos","Kamisato Ayato",[212, 131, 175, 334, 389, 296],[94, 289, 384, 377, 283, 87],"Constellations/Cypressus_Custos.png","Characters/Ayato.png","Hydro");

allCons[49] = new Constellation("Umbrabilis Orchis","Yelan",[264, 136, 258, 386, 424, 262],[264, 378, 439, 367, 211, 108],"Constellations/Umbrabilis_Orchis.png","Characters/Yelan.png","Hydro");

allCons[50] = new Constellation("Tribulatio Demptio","Kuki Shinobu",[361, 434, 291, 117, 103, 234],[257, 185, 72, 161, 358, 448],"Constellations/Tribulatio_Demptio.png","Characters/Shinobu.png","Electro");

allCons[51] = new Constellation("Cervus Minor","Shikanoin Heizou",[162, 175, 256, 145, 251, 363],[57, 196, 140, 367, 432, 329],"Constellations/Cervus_Minor.png","Characters/Heizou.png","Anemo");

allCons[52] = new Constellation("Leptailurus Cervarius","Collei",[384, 305, 293, 164, 97, 131],[216, 259, 398, 136, 244, 351],"Constellations/Leptailurus_Cervarius.png","Characters/Collei.png","Dendro");

allCons[53] = new Constellation("Vulpes Zerda","Tighnari",[177, 249, 339, 156, 224, 377],[86, 223, 86, 328, 452, 357],"Constellations/Vulpes_Zerda.png","Characters/Tighnari.png","Dendro");

allCons[54] = new Constellation("Magicae Lucerna","Dori",[253, 256, 149, 60, 256, 366],[147, 258, 294, 265, 360, 291],"Constellations/Magicae_Lucerna.png","Characters/Dori.png","Electro");

allCons[55] = new Constellation("Sagitta Scutum","Candace",[256, 256, 424, 409, 119, 90],[96, 425, 325, 164, 147, 328],"Constellations/Sagitta_Scutum.png","Characters/Candace.png","Hydro");

allCons[56] = new Constellation("Lupus Aureus","Cyno",[413, 352, 275, 100, 319, 440],[247, 214, 317, 427, 404, 437],"Constellations/Lupus_Aureus.png","Characters/Cyno.png","Electro");

allCons[57] = new Constellation("Lotos Somno","Nilou",[256, 256, 143, 384, 441, 66],[108, 397, 314, 316, 190, 191],"Constellations/Lotos_Somno.png","Characters/Nilou.png","Hydro");

allCons[58] = new Constellation("Sapientia Oromasdis","Nahida",[92, 78, 256, 438, 437, 256],[411, 247, 27, 250, 407, 437],"Constellations/Sapientia_Oromasdis.png","Characters/Nahida.png","Dendro");

allCons[59] = new Constellation("Luscinia","Layla",[102, 256, 379, 308, 198, 328],[160, 50, 135, 301, 177, 439],"Constellations/Luscinia.png","Characters/Layla.png","Cryo");

allCons[60] = new Constellation("Flosculi Implexi","Faruzan",[258, 436, 305, 193, 77, 257],[80, 248, 242, 244, 249, 433],"Constellations/Flosculi_Implexi.png","Characters/Faruzan.png","Anemo");

allCons[61] = new Constellation("Peregrinus","Wanderer",[141, 368, 433, 373, 137, 63],[93, 94, 259, 440, 442, 254],"Constellations/Peregrinus.png","Characters/Wanderer.png","Anemo");

allCons[62] = new Constellation("Osmanthus","Yaoyao",[127, 250, 399, 330, 152, 247],[186, 107, 238, 387, 382, 352],"Constellations/Osmanthus.png","Characters/Yaoyao.png","Dendro");

allCons[63] = new Constellation("Vultur Volans","Alhaitham",[257, 69, 443, 208, 354, 148],[338, 123, 112, 455, 396, 379],"Constellations/Vultur_Volans.png","Characters/Alhaitham.png","Dendro");

allCons[64] = new Constellation("Mantichora","Dehya",[263, 151, 151, 417, 422, 333],[175, 199, 437, 437, 241, 147],"Constellations/Mantichora.png","Characters/Dehya.png","Pyro");

allCons[65] = new Constellation("Palumbus","Mika",[323, 377, 405, 294, 349, 137],[132, 157, 343, 407, 439, 396],"Constellations/Palumbus.png","Characters/Mika.png","Cryo");

allCons[66] = new Constellation("Paradisaea","Kaveh",[279, 235, 121, 383, 336, 213],[108, 272, 168, 167, 382, 450],"Constellations/Paradisaea.png","Characters/Kaveh.png","Dendro");

allCons[67] = new Constellation("Lagenaria","Baizhu",[151, 144, 400, 380, 210, 258],[125, 239, 286, 466, 412, 166],"Constellations/Lagenaria.png","Characters/Baizhu.png","Dendro");

allCons[68] = new Constellation("Arcella","Kirara",[256, 256, 95, 95, 256, 418],[256, 442, 350, 163, 70, 163],"Constellations/Arcella.png","Characters/Kirara.png","Dendro");

allCons[69] = new Constellation("Felis Alba","Lynette",[333, 405, 362, 218, 77, 123],[149, 222, 381, 413, 270, 177],"Constellations/Felis_Alba.png","Characters/Lynette.png","Anemo");

allCons[70] = new Constellation("Felis Fuscus","Lyney",[185, 123, 131, 303, 435, 361],[162, 270, 396, 458, 316, 229],"Constellations/Felis_Fuscus.png","Characters/Lyney.png","Pyro");

allCons[71] = new Constellation("Automaton","Freminet",[208, 114, 357, 328, 412, 412],[160, 360, 402, 252, 193, 315],"Constellations/Automaton.png","Characters/Freminet.png","Cryo");

allCons[72] = new Constellation("Leviathan Judicator","Neuvillete",[169, 306, 186, 111, 376, 439],[158, 257, 445, 329, 420, 274],"Constellations/Leviathan_Judicator.png","Characters/Neuvillette.png","Hydro");

allCons[73] = new Constellation("Cerberus","Wriothesley",[183, 324, 256, 81, 427, 256],[93, 93, 326, 276, 275, 467],"Constellations/Cerberus.png","Characters/Wriothesley.png","Cryo");

allCons[74] = new Constellation("Hualina Veritas","Charlotte",[116, 84, 268, 292, 78, 396],[80, 224, 258, 113, 419, 396],"Constellations/Hualina_Veritas.png","Characters/Charlotte.png","Cryo");

allCons[75] = new Constellation("Animula Choragi","Furina",[254, 112, 137, 262, 384, 401],[65, 282, 410, 455, 391, 276],"Constellations/Animula_Choragi.png","Characters/Furina.png","Hydro");

allCons[76] = new Constellation("Rosa Multiflora","Navia",[145, 174, 292, 274, 344, 361],[245, 357, 339, 129, 104, 180],"Constellations/Rosa_Multiflora.png","Characters/Navia.png","Geo");

allCons[77] = new Constellation("Sclopetum Ensiferum","Chevreuse",[407, 163, 104, 340, 97, 435],[97, 319, 441, 325, 85, 423],"Constellations/Sclopetum_Ensiferum.png","Characters/Chevreuse.png","Pyro");

allCons[78] = new Constellation("Leo Expergiscens","Gaming",[158, 118, 192, 321, 386, 349],[172, 221, 343, 343, 221, 160],"Constellations/Leo_Expergiscens.png","Characters/Gaming.png","Pyro");

allCons[79] = new Constellation("Grus Serena","Xianyun",[141, 178, 270, 275, 417, 377],[130, 342, 100, 217, 129, 385],"Constellations/Grus_Serena.png","Characters/Xianyun.png","Anemo");

allCons[80] = new Constellation("Cisoria","Chiori",[256, 256, 136, 379, 96, 408],[448, 69, 235, 155, 374, 379],"Constellations/Cisoria.png","Characters/Chiori.png","Geo");

allCons[81] = new Constellation("Ignis Purgatorius","Arlecchino",[256, 369, 259, 154, 199, 254],[112, 236, 431, 295, 182, 216],"Constellations/Ignis_Purgatorius.png","Characters/Arlecchino.png","Pyro");

allCons[82] = new Constellation("Basileos Delta","Sethos",[256, 256, 307, 207, 307, 207],[453, 295, 295, 160, 160, 295],"Constellations/Basileos_Delta.png","Characters/Sethos.png","Electro");

allCons[83] = new Constellation("Rapperia","Clorinde",[256, 256, 189, 380, 194, 300],[33, 490, 360, 341, 176, 136],"Constellations/Rapperia.png","Characters/Clorinde.png","Electro");

allCons[84] = new Constellation("Nereides","Sigewinne",[146, 218, 215, 357, 452, 126],[379, 419, 291, 273, 198, 158],"Constellations/Nereides.png","Characters/Sigewinne.png","Hydro");

allCons[85] = new Constellation("Pomum de Ambra","Emilie",[256, 162, 352, 178, 252, 337],[448, 365, 363, 218, 136, 217],"Constellations/Pomum_de_Ambra.png","Characters/Emilie.png","Dendro");

allCons[86] = new Constellation("Ochotona Princeps","Kachina",[203, 207, 301, 134, 373, 256],[103, 163, 149, 293, 293, 433],"Constellations/Ochotona_Princeps.png","Characters/Kachina.png","Geo");

allCons[87] = new Constellation("Phoca Neomonachus","Mualani",[301, 361, 447, 281, 180, 69],[178, 370, 422, 438, 386, 413],"Constellations/Phoca_Neomonachus.png","Characters/Mualani.png","Hydro");

//allCons[88] = new Constellation("Chimaera Alebriius","Kinich",[],[],"Constellations/Chimaera_Alebriius.png","Characters/Kinich.png","Dendro");
