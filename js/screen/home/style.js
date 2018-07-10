/**
 * author: Martin SD
 */
const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
	headerBody: {
		flex: 0.7, justifyContent: "center", flexDirection: "row", alignItems: 'center'
	},
	header_icon: {color: '#008da9'},
	left_row: {flex:1, flexDirection: 'row'},
	list_item: {margin:10},
	item_row: {flex:1, flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', justifyContent: 'space-between'},
	text_label: {marginLeft: 10, width: deviceWidth - 140, marginRight:10},
  thumb: {width: 80, height: 80},
  forward_ico: {width: 20, justifyContent: 'center'},
  time_label: {fontSize:12, color: '#777'},
	webview: {
		flex:1, width:'100%', minWidth:deviceWidth,
		minHeight:deviceHeight-80, //why 80???
		height:'100%'
	},
	search_bar: {
		width: deviceWidth - 120, height: Platform.OS==='ios'?35:40, backgroundColor: '#eee',
		justifyContent: 'center', marginTop: 2, borderRadius:6, borderColor:'#eee'
	},
	search_cancel: {width:100, justifyContent: 'center'}
};
