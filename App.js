import {Swiper} from    'react-native-swiper'
import React, {
    Component,
  } from 'react';
  import {
    AppRegistry,
    Image,
    FlatList,
    StyleSheet,
    Text,
    View,
    RefreshControl, 
    ScrollView
  } from 'react-native';
  // import {SwipeableViews} from '../node_modules/react-swipeable-views';
//   import  
//   {
//     viewpager,
//   } from  'react-native-viewpager';
  var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
  // const BANNER_IMGS = [  
  //   require('../app/images/banner1.png'),  
  //   require('../app/images/banner2.png'),  
  //   require('../app/images/banner2.png'),  
  //   require('../app/images/banner2.png')  
  // ];  
  export default class aw extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loaded: false,
      };
      // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
      // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
      this.fetchData = this.fetchData.bind(this);
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
          this.setState({
            data: this.state.data.concat(responseData.movies),
            loaded: true,
          });
        });
    }
  
    renderScrollView()  {
  
    }
  
    render() {
      // <ViewPager  
      // style={{height:130}}  
      // dataSource={this.state.dataSource}  
      // renderPage={this._renderPage}  
      // isLoop={true}  
      // autoPlay={true}/> 
  
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }
  
      return (
        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
          refreshControl  = {(
            <RefreshControl
                title = 'loading'
                onRefresh = {this._onrefresh}
                refreshing  = {!this.state.loaded}
                colors  = {['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
            />
          )}
          keyExtractor = {
              this._extraUniqueKey
          }   
        />
        // <Swiper style={styles.wrapper} showsButtons={true}>
        //     <View style={styles.slide1}>
        //         <Text style={styles.text}>Hello Swiper</Text>
        //     </View>
        //     <View style={styles.slide2}>
        //         <Text style={styles.text}>Beautiful</Text>
        //     </View>
        //     <View style={styles.slide3}>
        //         <Text style={styles.text}>And simple</Text>
        //     </View>
        // </Swiper>
        // <Swiper style={styles.swiper}height={200}horizontal={true}paginationStyle={{bottom: 10}}showsButtons={false}>
        //  <Image source={require('.././banner2.png')} style={styles.img}/>
        //  <Image source={require('.././banner2.png')} style={styles.img}/>
        //  <Image source={require('.././banner2.png')} style={styles.img}/>
        //  <Image source={require('.././banner2.png')} style={styles.img}/>
        //  <Image source={require('.././banner2.png')} style={styles.img}/>
        //  <Image source={require('.././banner2.png')} style={styles.img}/>
        // </Swiper>
      )
    }
    _renderPage(data, pageID) {  
      return (  
          <Image  
              source={data}  
              style={styles.page}/>  
      );  
  }  
    _onRefresh()
    {
      this.fetchData;
    }
    _extraUniqueKey(item ,index){
        return "index"+index+item;
  }  
  
    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      );
    }
  
    renderMovie(movie) {
      return (
        <View style={styles.container}>
          <Image
            source={{uri: movie.item.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.item.title}</Text>
            <Text style={styles.year}>{movie.item.year}</Text>
          </View>
        </View>
      );
    }
  }
  
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
    thumbnail: {
      width: 53,
      height: 81,
    },
    list: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
    page: {  
      flex: 1,  
      height: 260,  
      resizeMode: 'stretch'  
  },
    wrapper: {
    },
    slide1: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#9DD6EB',
    },
    slide2: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#97CAE5',
    },
    slide3: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#92BBD9',
    },
    text: {
     color: '#fff',
     fontSize: 30,
     fontWeight: 'bold',
    },
    swiper: {},
    img: {
        width:  200,
        height: 200,
    }
  });
// 'use strict';
// import React, {Component} from "react";
// import {ActivityIndicator, Animated, FlatList, ScrollView, StyleSheet, Text, View,Image} from "react-native";

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
// const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

// class aw extends Component {
//     static navigationOptions = {
//         title: 'aw',
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             //网络请求状态
//             error: false,
//             errorInfo: "",
//             dataArray: [],
//         }
//     }

//     //网络请求
//     fetchData() {
//         //这个是js的访问网络的方法
//         fetch(REQUEST_URL)
//             .then((response) => response.json())
//             .then((responseData) => {
//                 let data = responseData.movies;
//                 let dataBlob = [];
//                 let i = 0;
//                 data.map(function (item) {
//                     dataBlob.push({
//                         key: i,
//                         value: item,
//                     })
//                     i++;
//                 });
//                 this.setState({
//                     //复制数据源
//                     dataArray: dataBlob,
//                     isLoading: false,
//                 });
//                 data = null;
//                 dataBlob = null;
//             })
//             .catch((error) => {
//                 this.setState({
//                     error: true,
//                     errorInfo: error
//                 })
//             })
//             .done();
//     }

//     componentDidMount() {
//         //请求数据
//         this.fetchData();
//     }

//     //加载等待的view
//     renderLoadingView() {
//         return (
//             <View style={styles.container}>
//                 <ActivityIndicator
//                     animating={true}
//                     style={[styles.gray, {height: 80}]}
//                     color='red'
//                     size="large"
//                 />
//             </View>
//         );
//     }

//     //加载失败view
//     renderErrorView(error) {
//         return (
//             <View style={styles.container}>
//                 <Text>
//                     Fail: {error}
//                 </Text>
//             </View>
//         );
//     }

//     //返回itemView
//     renderItemView({item}) {
//         return (
//           <View style={styles.container}>
//           <Image
//             source={{uri: item.value.posters.thumbnail}}
//             style={styles.thumbnail}
//           />
//           <View style={styles.rightContainer}>
//             <Text style={styles.title}>{item.value.title}</Text>
//             <Text style={styles.year}>{item.value.year}</Text>
//           </View>
//         </View>
//         );
//     }

//     renderData() {
//         return (
//             <ScrollView >
//                 <AnimatedFlatList
//                     data={this.state.dataArray}
//                     renderItem={this.renderItemView}
//                 />
//             </ScrollView>
//         );
//     }

//     render() {
//         //第一次加载等待的view
//         if (this.state.isLoading && !this.state.error) {
//             return this.renderLoadingView();
//         } else if (this.state.error) {
//             //请求失败view
//             return this.renderErrorView(this.state.errorInfo);
//         }
//         //加载数据
//         return this.renderData();
//     }
// }

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
    
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//   },
//   list: {
//     paddingTop: 66,
//     paddingLeft: 20,

//     backgroundColor: '#F5FCFF',
//   },
// });
// module.exports = aw;

