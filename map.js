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
    	// 1 - 
        location: [-73.95932,40.809395],
        content: 'corner of 120 & Amsterdam (N)'
    },
    {
        location: [-73.959511,40.809302],
        content: 'corner of 120 & Amsterdam (E)'
    },
    {
        location: [-73.959447,40.809237],
        content: 'corner of 120 & Amsterdam (high)'
    },
	{
    	// 4	10	1	140 SE
    	location: [-73.959876,40.809625],
        content: 'On 120th, left of Fu Foundation door'
    },
	{
    	//5	10	1	255 W
    	location: [-73.960047,40.809598],
        content: 'On 120th, Seeley Mudd building to right of door'
    },
	{
    	//6	10	1	156 SE
    	location: [-73.96085,40.809933],
        content: 'On 120th, right of Shapiro Gate'
    },
	{
    	//7	25	2?	272 W
    	location: [-73.960929,40.810002],
        content: '120th, Bio stockroom gate; pointed down about 40 degrees'
    },
	{
    	//8	10	1	245 SW
    	location: [-73.961132,40.809965],
        content: '120th, Pupin to R of driveway'
    },
	{
    	//9	10	1	145 SE
    	location: [-73.961396,40.810117],
        content: '120th, Pupin - L of steel door'
    },
	{
    	//10	10	1	245 SW	
    	location: [-73.961452,40.810061],
        content: '120th, Pupin - R of steel door'
    },
	{
    	//11	10	3	125 SE	
    	location: [-73.961713,40.810325],
        content: 'underside roof at box office'
    },
	{
    	//12	10	3	292 W
    	location: [-73.961815,40.810412],
        content: 'underside roof by glass doors, L'
    },
	{
    	//13	10	3	190 S
    	location: [-73.961772,40.810344],
        content: 'underside roof by glass doors, R'
    },	
	{
    	//15	12	1	84 E
    	location: [-73.961877,40.810242],
    	content: '120th & Broadway, W side of corner'
    },
	{
    	//16	10	1	246 SW
    	location: [-73.962245,40.810234],
    	content: 'on granite just s of 120 on broadway'
    },
	{
    	//17	12	1	230 SW	
    	location: [-73.962674,40.809696],
    	content: 'on Broadway Chandler to r of driveway'
    },
	{
    	//18	12	1	107 E	
    	location: [-73.963124,40.809317],
    	content: 'Broadway just s of 118, L'
    },
	{
    	//19	12	1	211 SW	
    	location: [-73.962784,40.809302],
    	content: 'Broadway just s of 118, R'
    },
	{
    	//20	12	1	195 S
    	location: [-73.963334,40.808865],
    	content: 'Broadway s of 117, L'
    },
	{
    	//21	12	1	84 E	
    	location: [-73.963214,40.808693],
    	content: 'Broadway s of 117, R'
    },
	{
    	//22	10	1	211 SW	
    	location: [-73.963399,40.80832],
    	content: 'L of miller theater, L'
    },
	{
    	//23	10	1	125 SE	
    	location: [-73.963399,40.80832],
    	content: 'L of miller theater, R'
    },
    {
    	//25	12	4	205 SW	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; labelled "Axis Communications"'
    },
	{
    	//26A	8	5	263 W	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing'
    },
	{
    	//26B	8	5	205 SW	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing'
    },
	{
    	//26C	8	5	146 SE	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing'
    },
	{
    	//26D	8	5	102 E	
    	location: [-73.963878,40.807869],
    	content: '	R corner of main gate, 116 & Broadway; four cameras in one casing'
    },
	{
    	//27	10	1	225 SW	
    	location: [-73.964097,40.80735],
    	content: '	Broadway at 115 furnald, L'
    },
	{
    	//28	10	1	109 E	
    	location: [-73.964097,40.80735],
    	content: '	Broadway at 115 furnald, R'
    },
	{
    	//29	10	1	185 S	
    	location: [-73.964174,40.807206],
    	content: '	115 Broadway Lerner corner'
    },
	{
    	//30	12	1	134 SE	
    	location: [-73.964277,40.807109],
    	content: '	r of Lerner bookstore door'
    },
	{
    	//31	12	1	207 SW	
    	location: [-73.964976,40.806775],
    	content: '	L of WKCR door Broadway n of 114'
    },
	{
    	//32	12	1	225 SW	
    	location: [-73.964871,40.806655],
    	content: '	corner 114 and Broad, W'
    },
    {
    	//34	12		83 E	
    	location: [-73.964683,40.806636],
    	content: '	corner 114 and Broad, white - Sony; smaller lens protrudes, not nestled in casing'
    },
	{
    	//35	12	?	?	
    	location: [-73.964188,40.806726],
    	content: '	lerner service entrance, white: unable to see through casing'
    },
	{
    	//36	8		230 SW	
    	location: [-73.964188,40.806726],
    	content: '	lerner service entrance, underside roof; axis brand'
    },
	{
    	//38	8		83 E	
    	location: [-73.963929,40.806343],
    	content: '	on iron fence on 114th, W of class of 1929 gate'
	},
	{
    	//39	10		15 N	
    	location: [-73.963936,40.806393],
    	content: '	114th behind black iron fence on wall'
	},
	{
    	//40	20		inverse of 356 N	
    	location: [-73.963936,40.806393],
    	content: '	big white vicon brand; appears pointed at dorm?'
	},
	{
    	//41	8		10 N	
    	location: [-73.963822,40.8063],
    	content: 'wall of butler R of 1929 gate'
	},
	{
    	//42	8	1	155 SE	
    	location: [-73.963612,40.805868],
    	content: '	wall of butler E of shipping door, L'
	},
	{
    	//43	8	1	354 N	
    	location: [-73.963589,40.806025],
    	content: '	wall of butler E of shipping door, R'
	},
	{
    	//44	8	1	360 N	
    	location: [-73.962777,40.805924],
    	content: 'W of John Jay shipping entrance'
	},
	{
    	//45	8	1	149 SE	
    	location: [-73.962957,40.805855],
    	content: 'E of John Jay shipping entrance'
	},
	{
    	//46	10		344 N	
    	location: [-73.962271,40.805525],
    	content: '114th, wall of John Jay; white axis brand'
	},
	{
    	//47	10		120 E	
    	location: [-73.961935,40.80558],
    	content: '114th & Amsterdam corner S (L)'
	},
	{
    	//48	10		64 NE	
    	location: [-73.961935,40.80558],
    	content: '114th & Amsterdam corner S (right)'
	},
	{
    	//49	10		229 SW	
    	location: [-73.961884,40.805661],
    	content: '114th & Amsterdam corner E'
	},
	{
    	//50	12	1	237 SW	
    	location: [-73.961784,40.806157],
    	content: 'Amsterdam just S of 115th'
	},
	{
    	//51	12	1	343 N	
    	location: [-73.961668,40.806294],
    	content: ''	
	},
	{
    	//52	10	1		
    	location: [-73.961338,40.806809],
    	content: 'corner of Hamilton building at 116 & Amsterdam (east)'
	},
	{
    	//53	10	1	0 N	
    	location: [-73.961308,40.806807],
    	content: 'corner of Hamilton building at 116 & Amsterdam (middle)'
	},
	{
    	//54	10	1	228 SW	
    	location: [-73.961308,40.806807],
    	content: 'corner of Hamilton building at 116 & Amsterdam (north)'
	},
	{
    	//55	8	1	31 NE	
    	location: [-73.961097,40.807001],
    	content: 'corner of Kent building at 116 & Amsterdam (south)'
	},
	{
    	//56	8	1	360 N	
    	location: [-73.9611,40.807035],
    	content: 'corner of Kent building at 116 & Amsterdam (middle)'
	},
	{
    	//57	8	1	256 W	
    	location: [-73.961136,40.807031],
    	content: 'corner of Kent building at 116 & Amsterdam (east)'
	},
	{
    	//58	8	1	254 W	
    	location: [-73.96093,40.807171],
    	content: 'Amsterdam N of 116th'
	},
	{
    	//59	12	1	225 SW	
    	location: [-73.960307,40.807969],
    	content: 'Amsterdam under bridge'
	},
	{
    	//60	12	1	45 NE	
    	location: [-73.960424,40.807876],
    	content: 'Amsterdam N of chapel gate'
	},
	{
    	//61A	12	5	16 N	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th'
	},
	{
    	//61B	12	5	336 NW	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th'
	},
	{
    	//61C	12	5	264 W	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th'
	},
	{
    	//61D	12	5	233 SW	
    	location: [-73.960235,40.808207],
    	content: '4 way on Amsterdam at 118th'
	},
	{
    	//62	12		57 NE	
    	location: [-73.959801,40.808887],
    	content: 'Amsterdam at 119th N of driveway (left)'
	},
	{
    	//63	12			
    	location: [-73.959795,40.808879],
    	content: 'Amsterdaam at 119th N of driveway (right)'
    },
	{
    	//65	8	1	33 NE	
    	location: [-73.960621,40.808126],
    	content: 'back door to Avery'
	},
	{
    	//66	10	x	92 E	
    	location: [-73.960653,40.808813],
    	content: 'back of Schermerhorn loading door; pointing down 45 degrees'
	},
	{
    	//67	7		260 W	
    	location: [-73.960658,40.808839],
    	content: 'business school lab, left of door'
	},
	{
    	//68	7		80 E	
    	location: [-73.960645,40.80887],
    	content: 'business school lab, right of door'
	},
	{
    	//69	10		246 SW	
    	location: [-73.960521,40.808944],
    	content: 'back side of Schermerhorn'
	},
	{
    	//70	8		14 N	
    	location: [-73.961775,40.810111],
    	content: 'SW corner of Pupin by stairs (S)'
	},
	{
    	//71	8		101 E	
    	location: [-73.961775,40.810111],
    	content: 'SW corner of Pupin by stairs (W)'
	},
	{
    	//72	12		148 SE	
    	location: [-73.961872,40.809834],
    	content: 'brick elevator across from Pupin (W upper)'
	},
	{
    	//73	8		198 S	
    	location: [-73.961872,40.809834],
    	content: 'brick elevator across from Pupin (W lower)'
	},
	{
    	//74	8		??	
    	location: [-73.961872,40.809834],
    	content: 'brick elevator across from Pupin (NW)'
	},
	{
    	//75	8		205 SW	
    	location: [-73.961714,40.809537],
    	content: 'brick elevator across from Pupin (NE)'
	},
	{
    	//76	8		15 N	
    	location: [-73.961725,40.809531],
    	content: 'brick elevator across from Pupin (east)'
	},
	{
    	//77	12		247 SW	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, upper E'
	},
	{
    	//78	12		20 N	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, upper S'
	},
	{
    	//79	8		24 NE	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, lower S'
	},
	{
    	//80	6		243 SW	
    	location: [-73.961719,40.809158],
    	content: 'Dodge entrance, lower N'
	},
	{
    	//81	10	1	263 W	
    	location: [-73.961656,40.808548],
    	content: 'rear of Low E'
	},
	{
    	//82	10	1	169 S	
    	location: [-73.961656,40.808548],
    	content: 'rear of Low W'
	},
	{
    	//83	8	1	2 N	
    	location: [-73.962176,40.808827],
    	content: 'walk to math S'
	},
	{
    	//84	8	1	228 SW	
    	location: [-73.962176,40.808827],
    	content: 'walk to math N'
	},
	{
    	//85	9	1	124 SE	
    	location: [-73.962176,40.808827],
    	content: 'walk to math W'
	},
	{
    	//86	8	1	34 NE	
    	location: [-73.962458,40.809092],
    	content: 'walk to havemeyer S'
	},
	{
    	//87	8	1	228 SW	
    	location: [-73.962458,40.809092],
    	content: 'walk to havemeyer N'
	},
	{
    	//88	9	1	277 W	
    	location: [-73.962458,40.809092],
    	content: 'walk to havemeyer E'
	},
	{
    	//89	9		241 S	
    	location: [-73.959546,40.809142],
    	content: 'Mudd ledge Amsterdam above door'
	},
	{
    	//90	10	1	274 W	
    	location: [-73.959539,40.809344],
    	content: 'Mudd ledge corner Amsterdam side'
	},
	{
    	//91	10	1	145 SE	
    	location: [-73.959524,40.809393],
    	content: 'Mudd ledge corner 120th side'
	},
	{
    	//92	10	1	250 W	
    	location: [-73.959952,40.809527],
    	content: 'Mudd ledge middle L'
	},
	{
    	//93	10	1	138 SE	
    	location: [-73.959952,40.809527],
    	content: 'Mudd ledge middle R'
	},
	{
    	//94	10	1	316 NW	
    	location: [-73.960358,40.809627],
    	content: 'mudd ledge NW corner N'
	},
	{
    	//95	10	1	67 NE	
    	location: [-73.960369,40.809581],
    	content: 'mudd ledge NW corner W'
	},
	{
    	//96	6		98 E	
    	location: [-73.96362,40.807928],
    	content: 'electronic campus map, Broadway 116; says HD on it'
	},
	{
    	//97	10	1	107 E	
    	location: [-73.962907,40.807652],
    	content: 'by cornerstone (L)'
	},
	{
    	//98	10	1	342 N	
    	location: [-73.962907,40.807652],
    	content: 'by cornerstone (R)'
	},
	{
    	//99		1	121 SE	
    	location: [-73.962941,40.807626],
    	content: 'R of cornerstone'
	},
	{
    	//101			230 SW	
    	location: [-73.962937,40.807463],
    	content: 'central W quad N'
	},
	{
    	//102				
    	location: [-73.962937,40.807463],
    	content: 'central W quad'
	},
	{
    	//103				
    	location: [-73.962937,40.807463],
    	content: 'central W quad'
	},
	{
    	//104				
    	location: [-73.962937,40.807463],
    	content: 'central W quad'
	},
	{
    	//105				
    	location: [-73.962186,40.807165],
    	content: 'central E quad'
	},
	{
    	//106				
    	location: [-73.962186,40.807165],
    	content: 'central E quad'
	},
	{
    	//107				
    	location: [-73.962186,40.807165],
    	content: 'central E quad'
	},
	{
    	//108				
    	location: [-73.962186,40.807165],
    	content: '40.807165	central E quad'
	},
	{
    	//109	6		40 NE	
    	location: [-73.961216,40.806907],
    	content: 'electronic campus map, Amsterdam & 116'
	},
	{
    	//110			360 N	
    	location: [-73.961216,40.806907],
    	content: 'next to electronic campus map, Amsterdam & 116'
	},
	{
    	//111	12	1	341 N	
    	location: [-73.961986,40.807338],
    	content: 'SW corner Kent S'
	},
	{
    	//112	12	1	136 SE	
    	location: [-73.961986,40.807338],
    	content: 'SW corner Kent W'
	},
	{
    	//113	8	1	318 NW	
    	location: [-73.961623,40.806812],
    	content: 'Hamilton R of door, E'
	},
	{
    	//114	8	1	120 SE	
    	location: [-73.961623,40.806812],
    	content: 'Hamilton R of door, S'
	},
	{
    	//115	8	1	208 SW	
    	location: [-73.962102,40.806421],
    	content: 'Hartley near bust L'
	},
	{
    	//116	8	1	114 SE	
    	location: [-73.962102,40.806421],
    	content: 'Hartley near bust R'
	},
	{
    	//117				
    	location: [-73.961861,40.806258],
    	content: 'tunnel next to Hartley, W'
	},
	{
    	//118	6		214 SW	
    	location: [-73.962759,40.805988],
    	content: 'inside of class of 29 gate'
	},
	{
    	//119	8		8 N	
    	location: [-73.963506,40.806831],
    	content: 'L of Lerner main entrance'
	},
	{
    	//120				
    	location: [-73.963694,40.806649],
    	content: 'Lerner L of café exit'
	},
	{
    	//121	10		236 SW	
    	location: [-73.964081,40.807139],
    	content: 'walkway alongside Lerner'
	},
	{
    	//122	6		27 NE	
    	location: [-73.964037,40.807175],
    	content: 'electronic map N of Lerner'
	},
	{
    	//123	10	1		
    	location: [-73.964009,40.80721],
    	content: 'Furnald SE corner S'
	},
	{
    	//124	10	1	273 W	
    	location: [-73.964009,40.80721],
    	content: 'Furnald SE corner E'
	},
	{
    	//125	10	1	232 SW	
    	location: [-73.964009,40.80721],
    	content: 'Furnald SE corner N'
    },







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