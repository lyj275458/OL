/**
 * Created by Yan on 17/11/9.
 */
const  editor = {//定义入参
  //品牌管理、根据id获取
  getByIdMM:{
    id:null
  },
  //新增品牌
  newPushMM:{
    name:"",
    logo:'',
    enName:'',
    desc:'',
    country:''
  },
  //删除品牌
  deletePpMM:{
    id:''
  },
  //修改品牌
  upDataPpMM:{
    country:'',
    desc:'',
    enName:'',
    id:'',
    logo:'',
    name:'',
  },
  //检测品牌名
  checkPpMM:{
    name:''
  },

  //获取该分类关联的品牌
  getCategoryBrandsMM:{
    categoryId:''
  },
  //分类、id获取单个分类详情
  ByIdGetTreeMM:{
    id:''
  },
  //删除分类
  deleteClassTreeMM:{
    id:''
  },
  //新增分类
  pushClassTreeMM:{
    //children:'',
    // fullIdPath:'',
    // fullNamePath:'',
     image:'',
     leaf:'',
     level:'',
     logo:'',
     name:'',
    // parentId:'',
     sort:'',
    // status:''
  },
  //修改分类
  updataClassTreeMM:{
    id:'',
    image:'',
    leaf:'',
    level:'',
    logo:'',
    name:'',
    sort:''
  },
  //检测分类名称是否存在
  checkClassTreeMM:{
    id:'',
    name:''
  },
  //标签管理、删除标签
  deleteTagMM:{
    id:''
  },
  //新增标签
  pushNewTagMM:{
    desc:'',
    logo:'',
    name:'',
    sort:'',
    type:'',
  },
  //根据id获取标签
  getTagByIdMM:{
    id:''
  },

  //产品分类规格
  //修改一个小规格明细
  updateProductMM:{
    id:'',
    logo: '',
    name: '',
    specId: ''
  },
  //修改一个大规格明细
  updateProductSpecMM:{
    //categoryId:'',
    id:'',
    name:'',
    showLogo:'',
    leading:''
  },
  //删除分类下的一个商品规格模板
  deleteProductMM:{
    id:''
  },
  // 删除大规格模板下的一个小规格
  /* deleteSpecDetailMM:{
    id:''
  }, */
  // 在分类下挂一个规格模板
  addProductSpecMM:{
    categoryId: '',
    leading: '',
    name: '',
    showLogo: ''
  },
  //在分类下的一个大规格下添加一个小规格
  addProductSpecDetailMM:{
   // productCategorySpecDetailVO: '',
    logo: '',
    name: '',
    specId: ''
  },
  //获得一个分类型所有大规格
  getProductSpecsMM: {
    categoryId:'',
    needDetails:''
  },
  //获得一个分类大规格下的 所有规格特征明细
  getProductSpecDetailsMM:{
    specId:''
  },
  //商品分类参数
  //创建一个商品分类的参数模板
  createFenLeiMoMM:{
    categoryId:'',
    name:''
  },
  //删除一个商品分类的参数模板
  deleteFenLeiMoMM:{
    id:''
  },
  //更新一个商品分类的参数模板
  updataFenLeiMoMM:{
    id:'',
    name:''
  },
  //获取一个分类下的 商品参数模板
  getParamsByCategoryIdMM:{
    categoryId:'',
  },


      loginMM: {
      goodsID:""
    },
  dingdanListMM: {
    type:'',
    memberId:"",
    status:""
  }

};

const result = { //接收请求后的数据
  //省份列表
  cityList:[
    {
    "id": "1",
    "name": "北京",
    "parentid": "0",
    "parentname": "",
    "areacode": "010",
    "zipcode": "100000",
    "depth": "1"
    },
    {
      "id": "2",
      "name": "安徽",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "3",
      "name": "福建",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "4",
      "name": "甘肃",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "5",
      "name": "广东",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "6",
      "name": "广西",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "7",
      "name": "贵州",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "8",
      "name": "海南",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "9",
      "name": "河北",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "10",
      "name": "河南",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "11",
      "name": "黑龙江",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "12",
      "name": "湖北",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "13",
      "name": "湖南",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "14",
      "name": "吉林",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "15",
      "name": "江苏",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "16",
      "name": "江西",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "17",
      "name": "辽宁",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "18",
      "name": "内蒙古",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "19",
      "name": "宁夏",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "20",
      "name": "青海",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "21",
      "name": "山东",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "22",
      "name": "山西",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "23",
      "name": "陕西",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "24",
      "name": "上海",
      "parentid": "0",
      "parentname": "",
      "areacode": "021",
      "zipcode": "200000",
      "depth": "1"
    },
    {
      "id": "25",
      "name": "四川",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "26",
      "name": "天津",
      "parentid": "0",
      "parentname": "",
      "areacode": "022",
      "zipcode": "300000",
      "depth": "1"
    },
    {
      "id": "27",
      "name": "西藏",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "28",
      "name": "新疆",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "29",
      "name": "云南",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "30",
      "name": "浙江",
      "parentid": "0",
      "parentname": "",
      "areacode": "",
      "zipcode": "",
      "depth": "1"
    },
    {
      "id": "31",
      "name": "重庆",
      "parentid": "0",
      "parentname": "",
      "areacode": "023",
      "zipcode": "404100",
      "depth": "1"
    },
    {
      "id": "32",
      "name": "香港",
      "parentid": "0",
      "parentname": "",
      "areacode": "00852",
      "zipcode": "999077",
      "depth": "1"
    },
    {
      "id": "33",
      "name": "澳门",
      "parentid": "0",
      "parentname": "",
      "areacode": "00853",
      "zipcode": "999078",
      "depth": "1"
    },
    {
      "id": "34",
      "name": "台湾",
      "parentid": "0",
      "parentname": "",
      "areacode": "00886",
      "zipcode": "",
      "depth": "1"
    }],
  //城市列表
  smallCityList:[],
  //县级列表
  xianjiList:[],
  //是否禁用
  trueOrfalse:false,
  //弹框属性
  popoverAlive: {
    openOrClose: false,
    title: ''
  },
  //id品牌
  getByIdResult: {},
  //all品牌
  getAllPpResult:[],
  //新增品牌
  newPushResult:null,
//删除品牌
  deletePpResult:'',
  //修改品牌
  upDataPpResult:{
    obj:{},
    num:''
  },
  //检测品牌
  checkPpResult:'',

  //整个分类树
  getAllTreeResult:[],
  //id单个分类详情
  ByIdGetTreeResult:{},
  //新增分类
  pushClassTreeResult:'',
  //分类关联品牌
  getCategoryBrandsResult:'',

  //获取所有标签
  getAllTagResult:'',
  //新增标签
  pushNewTagResult:'',
  //根据id获取标签
  getTagByIdResult:'',
  //获得一个分类型所有大规格
  getProductSpecsResult:[],
  //获得一个分类大规格下的 所有规格特征明细
  getProductSpecDetailsResult: [],
  //获取一个分类下的 商品参数模板
  getParamsByCategoryIdResult:'',
  //品牌模块切换
  classResult:'VpinpaiList',
  //分类模块切换
  fenleiCalssResult:'VfenleiList',
  //分类切换接受
  FlDataResult:{
    obj:{},
    num:''
  },
  //新增商品切换
  goodsResult:'vCompile',
  Gdresult:{
    obj:{},
    num:''
  },
  //时间选择器快捷键
  pickerOptions2: {
    shortcuts: [
      {
        text: '一天前',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24);
          picker.$emit('pick', [start, end]);
        }
      }, {
      text: '最近一周',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end]);
      }
    }]
  },
  //大规格编辑
  smallguige:'',
  //小规格编辑
  updataSmall:{},
  //loading
  loading:false,

  loginResult:"",
  dingdanListResult:[]
}

const state = {
  editor,
  result
}
export default state
