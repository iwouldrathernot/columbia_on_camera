'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiaXdvdWxkcmF0aGVybm90IiwiYSI6ImNqbmZpdDhscjA0d24zcXBhOG5pd3RtbDgifQ.ybTlyS6TchYpaEgJqFH8Kg'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iwouldrathernot/cjp8lbr1l3ho42stgpm3teyml',
    // style: 'mapbox://styles/brianhouse/cjn0u552b52kr2spdz6yhpqj4',
    center: [-73.96024, 40.80877],
    zoom: 16
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

let data = [
    {
    	// 1 - 10 - 1 - 150 E
        location: [-73.95932,40.809395],
        content: 'corner of 120 & Amsterdam, N<br /><img src="001A.jpg" /><br /><img src="001B.jpg" />',
        bearing: 150
    
    },
    {   //2 10  1   330 NW
        location: [-73.959511,40.809302],
        content: 'corner of 120 & Amsterdam (E)',
        bearing: 330
    },
    {   // 3   25  2   18 N
        location: [-73.959447,40.809237],
        content: 'corner of 120 & Amsterdam (high)',
        bearing: 18
    },
	{
    	// 4	10	1	140 SE
    	location: [-73.959876,40.809625],
        content: 'On 120th, left of Fu Foundation door',
        bearing: 140
    },
	{
    	//5	10	1	255 W
    	location: [-73.960047,40.809598],
        content: 'On 120th, Seeley Mudd building to right of door',
        bearing: 255
    },
	{
    	//6	10	1	156 SE
    	location: [-73.96085,40.809933],
        content: 'On 120th, right of Shapiro Gate',
        bearing: 156
    },
	{
    	//7	25	2?	272 W
    	location: [-73.960929,40.810002],
        content: '120th, Bio stockroom gate; pointed down about 40 degrees',
        bearing: 272
    },
	{
    	//8	10	1	245 SW
    	location: [-73.961132,40.809965],
        content: '120th, Pupin to R of driveway',
        bearing: 245
    },
	{
    	//9	10	1	145 SE
    	location: [-73.961396,40.810117],
        content: '120th, Pupin - L of steel door',
        bearing: 145
    },
	{
    	//10	10	1	245 SW	
    	location: [-73.961452,40.810061],
        content: '120th, Pupin - R of steel door',
        bearing: 245
    },
	{
    	//11	10	3	125 SE	
    	location: [-73.961713,40.810325],
        content: 'underside roof at box office',
        bearing: 125
    },
	{
    	//12	10	3	292 W
    	location: [-73.961815,40.810412],
        content: 'underside roof by glass doors, L',
        bearing: 292
    },
	{
    	//13	10	3	190 S
    	location: [-73.961772,40.810344],
        content: 'underside roof by glass doors, R',
        bearing: 190
    },	
	{
    	//15	12	1	84 E
    	location: [-73.961877,40.810242],
    	content: '120th & Broadway, W side of corner',
    },
	{
    	//16	10	1	246 SW
    	location: [-73.96204,40.81013],
    	content: 'on granite just s of 120 on broadway',
        bearing: 246
    },
	{
    	//17	12	1	230 SW	
    	location: [-73.96246,40.80965],
    	content: 'on Broadway Chandler to r of driveway',
        bearing: 230
    },
	{
    	//18	12	1	107 E	
    	location: [-73.96280,40.80927],
    	content: 'Broadway just s of 118, L',
        bearing: 107
    },
	{
    	//19	12	1	211 SW	
    	location: [-73.962784,40.809302],
    	content: 'Broadway just s of 118, R',
        bearing: 211
    },
	{
    	//20	12	1	195 S
    	location: [-73.96312,40.80882],
    	content: 'Broadway s of 117, L',
    },
	{
    	//21	12	1	84 E	
    	location: [-73.963214,40.808693],
    	content: 'Broadway s of 117, R',
        bearing: 84
    },
	{
    	//22	10	1	211 SW	
    	location: [-73.963399,40.80832],
    	content: 'L of miller theater, L',
        bearing: 211
    },
	{
    	//23	10	1	125 SE	
    	location: [-73.963399,40.80832],
    	content: 'L of miller theater, R',
        bearing: 125
    },
    {
    	//25	12	4	205 SW	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; labelled "Axis Communications"',
        bearing: 205
    },
	{
    	//26A	8	5	263 W	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing',
        bearing: 263
    },
	{
    	//26B	8	5	205 SW	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing',
        bearing: 205
    },
	{
    	//26C	8	5	146 SE	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing',
        bearing: 146
    },
	{
    	//26D	8	5	102 E	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing',
        bearing: 102
    },
	{
    	//27	10	1	225 SW	
    	location: [-73.964097,40.80735],
    	content: '	Broadway at 115 furnald, L',
        bearing: 225
    },
	{
    	//28	10	1	109 E	
    	location: [-73.964097,40.80735],
    	content: '	Broadway at 115 furnald, R',
        bearing: 109
    },
	{
    	//29	10	1	185 S	
    	location: [-73.964174,40.807206],
    	content: '	115 Broadway Lerner corner',
        bearing: 185
    },
	{
    	//30	12	1	134 SE	
    	location: [-73.964277,40.807109],
    	content: '	r of Lerner bookstore door',
        bearing: 134
    },
	{
    	//31	12	1	207 SW	
    	location: [-73.96438,40.80692],
    	content: '	L of WKCR door Broadway n of 114',
        bearing: 207
    },
	{
    	//32	12	1	225 SW	
    	location: [-73.96455,40.80669],
    	content: '	corner 114 and Broad, W',
        bearing: 225
    },
    {
        //33    85 E
        location: [-73.96453,40.80666],
        content: '  corner 114 and Broad, N',
        bearing: 85
    },
    {
    	//34	12		83 E	
    	location: [-73.96450,40.80665],
    	content: '	corner 114 and Broad, white - Sony; smaller lens protrudes, not nestled in casing',
        bearing: 83
    },
	{
    	//35	12	?	?	
    	location: [-73.964188,40.806726],
    	content: '	lerner service entrance, white: unable to see through casing'
    },
	{
    	//36	8		230 SW	
    	location: [-73.964188,40.806726],
    	content: '	lerner service entrance, underside roof; axis brand',
        bearing: 230
    },
	{
    	//38	8		83 E	
    	location: [-73.963929,40.806343],
    	content: '	on iron fence on 114th, W of class of 1929 gate',
        bearing: 83
	},
	{
    	//39	10		15 N	
    	location: [-73.963936,40.806393],
    	content: '	114th behind black iron fence on wall',
        bearing: 15
	},
	{
    	//40	20		inverse of 356 N	
    	location: [-73.963936,40.806393],
    	content: '	big white vicon brand; appears pointed at dorm?',
        bearing: 356
	},
	{
    	//41	8		10 N	
    	location: [-73.963822,40.8063],
    	content: 'wall of butler R of 1929 gate',
        bearing: 10
	},
	{
    	//42	8	1	155 SE	
    	location: [-73.96347,40.80622],
    	content: '	wall of butler E of shipping door, L',
        bearing: 155
	},
	{
    	//43	8	1	354 N	
    	location: [-73.96338,40.80617],
    	content: '	wall of butler E of shipping door, R',
        bearing: 354
	},
	{
    	//44	8	1	360 N	
    	location: [-73.962777,40.805924],
    	content: 'W of John Jay shipping entrance',
        bearing: 360
	},
	{
    	//45	8	1	149 SE	
    	location: [-73.96338,40.80617],
    	content: 'E of John Jay shipping entrance',
        bearing: 149
	},
	{
    	//46	10		344 N	
    	location: [-73.96222,40.80569],
    	content: '114th, wall of John Jay; white axis brand',
        bearing: 344
	},
	{
    	//47	10		120 E	
    	location: [-73.96209,40.80563],
    	content: '114th & Amsterdam corner S (L)',
        bearing: 120
	},
	{
    	//48	10		64 NE	
    	location: [-73.96209,40.80563],
    	content: '114th & Amsterdam corner S (right)',
        bearing: 64
	},
	{
    	//49	10		229 SW	
    	location: [-73.96206,40.80565],
    	content: '114th & Amsterdam corner E',
        bearing: 229
	},
	{
    	//50	12	1	237 SW	
    	location: [-73.961784,40.806157],
    	content: 'Amsterdam just S of 115th',
        bearing: 237
	},
	{
    	//51	12	1	343 N	
    	location: [-73.961668,40.806294],
    	content: '',
        bearing: 343
	},
	{
    	//52	10	1		141 SE
    	location: [-73.961338,40.806809],
    	content: 'corner of Hamilton building at 116 & Amsterdam (east)',
        bearing: 141
	},
	{
    	//53	10	1	0 N	
    	location: [-73.961308,40.806807],
    	content: 'corner of Hamilton building at 116 & Amsterdam (middle)',
        bearing: 0
	},
	{
    	//54	10	1	228 SW	
    	location: [-73.961308,40.806807],
    	content: 'corner of Hamilton building at 116 & Amsterdam (north)',
        bearing: 228
	},
	{
    	//55	8	1	31 NE	
    	location: [-73.961097,40.807001],
    	content: 'corner of Kent building at 116 & Amsterdam (south)',
        bearing: 31
	},
	{
    	//56	8	1	360 N	
    	location: [-73.9611,40.807035],
    	content: 'corner of Kent building at 116 & Amsterdam (middle)',
        bearing: 360
	},
	{
    	//57	8	1	256 W	
    	location: [-73.961136,40.807031],
    	content: 'corner of Kent building at 116 & Amsterdam (east)',
        bearing: 256
	},
	{
    	//58	8	1	254 W	
    	location: [-73.96093,40.807171],
    	content: 'Amsterdam N of 116th',
        bearing: 254
	},
	{
    	//59	12	1	225 SW	
    	location: [-73.960307,40.807969],
    	content: 'Amsterdam under bridge',
        bearing: 225
	},
	{
    	//60	12	1	45 NE	
    	location: [-73.960424,40.807876],
    	content: 'Amsterdam N of chapel gate',
        bearing: 45
	},
	{
    	//61A	12	5	16 N	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th',
        bearing: 16
	},
	{
    	//61B	12	5	336 NW	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th',
        bearing: 336
	},
	{
    	//61C	12	5	264 W	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th',
        bearing: 264
	},
	{
    	//61D	12	5	233 SW	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th',
        bearing: 233
	},
	{
    	//62	12		57 NE	
    	location: [-73.959801,40.808887],
    	content: 'Amsterdam at 119th N of driveway (left)',
        bearing: 57
	},
	{
    	//63	12		
    	location: [-73.959795,40.808879],
    	content: 'Amsterdaam at 119th N of driveway (right)'
    },
	{
    	//64   6   1   97 E	
    	location: [-73.960563,40.807836],
    	content: 'inside chapel gate, corner of Fayerweather',
        bearing: 97
    },
    {
        //65    8   1   33 NE   
        location: [-73.96086,40.80820],
        content: 'back door to Avery',
        bearing: 33
	},
	{
    	//66	10	x	92 E	
    	location: [-73.960653,40.808813],
    	content: 'back of Schermerhorn loading door; pointing down 45 degrees',
        bearing: 92
	},
	{
    	//67	7		260 W	
    	location: [-73.960658,40.808839],
    	content: 'business school lab, left of door',
        bearing: 260
	},
	{
    	//68	7		80 E	
    	location: [-73.960645,40.80887],
    	content: 'business school lab, right of door',
        bearing: 80
	},
	{
    	//69	10		246 SW	
    	location: [-73.960521,40.808944],
    	content: 'back side of Schermerhorn',
        bearing: 246
	},
	{
    	//70	8		14 N	
    	location: [-73.961775,40.810111],
    	content: 'SW corner of Pupin by stairs (S)',
        bearing: 14
	},
	{
    	//71	8		101 E	
    	location: [-73.961775,40.810111],
    	content: 'SW corner of Pupin by stairs (W)',
        bearing: 101
	},
	{
    	//72	12		148 SE	
    	location: [-73.961872,40.809834],
    	content: 'brick elevator across from Pupin (W upper)',
        bearing: 148
	},
	{
    	//73	8		198 S	
    	location: [-73.961872,40.809834],
    	content: 'brick elevator across from Pupin (W lower)',
        bearing: 198
	},
	{
    	//74	8		??	
    	location: [-73.961872,40.809834],
    	content: 'brick elevator across from Pupin (NW)'
	},
	{
    	//75	8		205 SW	
    	location: [-73.961714,40.809537],
    	content: 'brick elevator across from Pupin (NE)',
        bearing: 205
	},
	{
    	//76	8		15 N	
    	location: [-73.961725,40.809531],
    	content: 'brick elevator across from Pupin (east)',
        bearing: 15
	},
	{
    	//77	12		247 SW	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, upper E',
        bearing: 247
	},
	{
    	//78	12		20 N	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, upper S',
        bearing: 20
	},
	{
    	//79	8		24 NE	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, lower S',
        bearing: 24
	},
	{
    	//80	6		243 SW	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, lower N',
        bearing: 243
	},
	{
    	//81	10	1	263 W	
    	location: [-73.961656,40.808548],
    	content: 'rear of Low E',
        bearing: 263
	},
	{
    	//82	10	1	169 S	
    	location: [-73.961656,40.808548],
    	content: 'rear of Low W',
        bearing: 169
	},
	{
    	//83	8	1	2 N	
    	location: [-73.962176,40.808827],
    	content: 'walk to math S',
        bearing: 2
	},
	{
    	//84	8	1	228 SW	
    	location: [-73.962176,40.808827],
    	content: 'walk to math N',
        bearing: 228
	},
	{
    	//85	9	1	124 SE	
    	location: [-73.962176,40.808827],
    	content: 'walk to math W',
        bearing: 124
	},
	{
    	//86	8	1	34 NE	
    	location: [-73.962458,40.809092],
    	content: 'walk to havemeyer S',
        bearing: 34
	},
	{
    	//87	8	1	228 SW	
    	location: [-73.962458,40.809092],
    	content: 'walk to havemeyer N',
        bearing: 228
	},
	{
    	//88	9	1	277 W	
    	location: [-73.962458,40.809092],
    	content: 'walk to havemeyer E',
        bearing: 277
	},
	{
    	//89	9		241 S	
    	location: [-73.959546,40.809142],
    	content: 'Mudd ledge Amsterdam above door',
        bearing: 241
	},
	{
    	//90	10	1	274 W	
    	location: [-73.959539,40.809344],
    	content: 'Mudd ledge corner Amsterdam side',
        bearing: 274
	},
	{
    	//91	10	1	145 SE	
    	location: [-73.959524,40.809393],
    	content: 'Mudd ledge corner 120th side',
        bearing: 145
	},
	{
    	//92	10	1	250 W	
    	location: [-73.959952,40.809527],
    	content: 'Mudd ledge middle L',
        bearing: 250
	},
	{
    	//93	10	1	138 SE	
    	location: [-73.959952,40.809527],
    	content: 'Mudd ledge middle R',
        bearing: 138
	},
	{
    	//94	10	1	316 NW	
    	location: [-73.960358,40.809627],
    	content: 'mudd ledge NW corner N',
        bearing: 316
	},
	{
    	//95	10	1	67 NE	
    	location: [-73.960369,40.809581],
    	content: 'mudd ledge NW corner W',
        bearing: 67
	},
	{
    	//96	6		98 E	
    	location: [-73.96362,40.807928],
    	content: 'electronic campus map, Broadway 116; says HD on it',
        bearing: 98
	},
	{
    	//97	10	1	107 E	
    	location: [-73.962907,40.807652],
    	content: 'by cornerstone (L)',
        bearing: 107
	},
	{
    	//98	10	1	342 N	
    	location: [-73.962907,40.807652],
    	content: 'by cornerstone (R)',
        bearing: 342
	},
	{
    	//99		1	121 SE	
    	location: [-73.962941,40.807626],
    	content: 'R of cornerstone',
        bearing: 121
	},
	{
    	//101  1   230 SW
    	location: [-73.962937,40.807463],
    	content: 'central W quad N',
        bearing: 230
	},
	{
    	//102  1   319 NW	
    	location: [-73.962937,40.807463],
    	content: 'central W quad E',
        bearing: 319
	},
	{
    	//103  1   160 S   	
    	location: [-73.962937,40.807463],
    	content: 'central W quad W',
        bearing: 160
	},
	{
    	//104  1   55 NE			
    	location: [-73.962937,40.807463],
    	content: 'central W quad S',
        bearing: 55
	},
	{
        //  105 1 46 NE
    	location: [-73.962186,40.807165],
    	content: 'central E quad S',
        bearing: 46
	},
	{
    	//106  1   284 W			
    	location: [-73.962186,40.807165],
    	content: 'central E quad E',
        bearing: 284
	},
	{
    	//107  1   223 SW  
    	location: [-73.962186,40.807165],
    	content: 'central E quad N',
        bearing: 223
	},
	{
    	//108  1   138 SE			
    	location: [-73.962186,40.807165],
    	content: '40.807165	central E quad W',
        bearing: 138
	},
	{
    	//109	6		40 NE	
    	location: [-73.961216,40.806907],
    	content: 'electronic campus map, Amsterdam & 116'
	},
	{
    	//110			360 N	
    	location: [-73.961216,40.806907],
    	content: 'next to electronic campus map, Amsterdam & 116',
        bearing: 360
	},
	{
    	//111	12	1	341 N	
    	location: [-73.961986,40.807338],
    	content: 'SW corner Kent S',
        bearing: 341
	},
	{
    	//112	12	1	136 SE	
    	location: [-73.961986,40.807338],
    	content: 'SW corner Kent W',
        bearing: 136
	},
	{
    	//113	8	1	318 NW	
    	location: [-73.96167,40.80672],
    	content: 'Hamilton R of door, E',
        bearing: 318
	},
	{
    	//114	8	1	120 SE	
    	location: [-73.96167,40.80672],
    	content: 'Hamilton R of door, S',
        bearing: 120
	},
	{
    	//115	8	1	208 SW	
    	location: [-73.96194,40.80634],
    	content: 'Hartley near bust L',
        bearing: 208
	},
	{
    	//116	8	1	114 SE	
    	location: [-73.96194,40.80634],
    	content: 'Hartley near bust R',
        bearing: 114
	},
	{
    	//117				
    	location: [-73.961861,40.806258],
    	content: 'tunnel next to Hartley, W'
	},
	{
    	//118	6		214 SW	
    	location: [-73.962759,40.805988],
    	content: 'inside of class of 29 gate',
        bearing: 214
	},
	{
    	//119	8		8 N	
    	location: [-73.963506,40.806831],
    	content: 'L of Lerner main entrance',
        bearing: 8
	},
	{
    	//120				275 W
    	location: [-73.963694,40.806649],
    	content: 'Lerner L of café exit',
        bearing: 275
	},
	{
    	//121	10		236 SW	
    	location: [-73.964081,40.807139],
    	content: 'walkway alongside Lerner',
        bearing: 236
	},
	{
    	//122	6		27 NE	
    	location: [-73.964037,40.807175],
    	content: 'electronic map N of Lerner',
        bearing: 27
	},
	{
    	//123	10	1		346 N
    	location: [-73.964009,40.80721],
    	content: 'Furnald SE corner S',
        bearing: 346
	},
	{
    	//124	10	1	273 W	
    	location: [-73.964009,40.80721],
    	content: 'Furnald SE corner E',
        bearing: 273
	},
	{
    	//125	10	1	232 SW	
    	location: [-73.964009,40.80721],
    	content: 'Furnald SE corner N',
        bearing: 232
    },
    {
        //126   15  x   73 E
        location: [-73.960379,40.809468],
        content: 'Roof of Fu Foundation/Mudd; big old Vicon',
        bearing: 73
    },
    {
        //127   7       100 E
        location: [-73.960397,40.809361],
        content: 'Right of door to Seeley Mudd; white Axis',
        bearing: 100
    },
    {
        //128   6       256 W
        location: [-73.96093,40.80891],
        content: 'Left inside by business school lab door; white axis flat',
        bearing: 256
    },
    {
        //129A 8 1 256 W
        location: [-73.960815,40.809197],
        content: 'Business school rear circle, E',
        bearing: 256
    },
    {
        //129B  8   1   205 SW
        location: [-73.960975,40.809446],
        content: 'Business school rear circle, N',
        bearing: 205
    },
    {
        //130   8   1   216 SW
        location: [-73.96134,40.809357],
        content: 'Business school rear circle, W',
        bearing: 216
    },
    {
        //131   8   1   121 SE
        location: [-73.960865,40.807712],
        content: 'on north side of Philosophy, walkway across Amsterdam',
        bearing: 121
    },
    {
        //132   8   1   213 SW
        location: [-73.961359,40.807605],
        content: 'Buell, east side',
        bearing: 213
    },
    {
        //133   10  1   129 SE
        location: [-73.96127,40.80730],
        content: 'Kent entrance, W',
        bearing: 129
    },
    {
        //134   10  1   221 SW
        location: [-73.96125,40.80729],
        content: 'Kent entrance, E',
        bearing: 221 
    }, 
    {
        //135   9       71 E
        location: [-73.961121,40.807972],
        content: 'chapel entrance, left',
        bearing: 71
    },
    {
        //136   9       220 SW
        location: [-73.961193,40.807839],
        content: 'chapel entrance, right',
        bearing: 220
    },
    {
        //137   6       325 NW
        location: [-73.962755,40.807914],
        content: 'right of elevator west of fountains',
        bearing: 325
    },
    {
        //143   6   233 SW
        location: [-73.96387,40.807286],
        content: 'Furnald window left of front entrance; white axis flat',
        bearing: 233
    },
    {
        //144       151 SE
        location: [-73.962943,40.807936],
        content: 'Wall of Dodge, Left of door; white axis',
        bearing: 151
    }


	]

    data.forEach(function(d) {

    let element = document.createElement('div');
    element.className = 'marker' 

//class name means we can create a visual style to be defined; define it in style.css

    let marker = new mapboxgl.Marker(element)    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})




let RADIUS = 20
let WIDTH = 20
let OPACITY = .05
let VIEW = 104
let COLOR = '#50C3DF'


map.on('load', function() { 
    map.addLayer({ 
        'id': 'viewsheds',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': null
        },
        'layout': {
            'line-cap': 'square',
            'line-join': 'miter'
        },
        'paint': {
            'line-color': COLOR,
            'line-width': WIDTH,
            'line-opacity': OPACITY
        }
    })
    makeViews()
})


function makeViews() {

    let geojson = {
        "type": "FeatureCollection",
        "features": []
    }

    for (let camera of data) {

        if (camera.bearing == undefined) continue        

        let bearing = (camera.bearing + 180) % 360 // correct for flipped view
        let start_angle = bearing - (VIEW / 2)

        let centerX = camera.location[0]
        let centerY = camera.location[1]

        for (let i=0; i<VIEW; i+=2) {
            let angle = i + start_angle
            let latlon = DestinationPoint(centerY, centerX, RADIUS, angle)
            let x = latlon[1]
            let y = latlon[0]
            let matchLine = turf.lineString([[centerX, centerY], [x, y]])
            geojson.features.push(matchLine)
        }

    }

    map.getSource('viewsheds').setData(geojson)    

}

