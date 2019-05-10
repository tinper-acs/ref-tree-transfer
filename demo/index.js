import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss';


import Demo1 from "./demolist/Demo1";import Demo2 from "./demolist/Demo2";
var DemoArray = [{"example":<Demo1 />,"title":" 基本示例1","code":"/**\n *\n * @title 基本示例1\n * @description 使用RefTreeTransferBaseUI，无input框\n *\n */\nimport React, { Component } from 'react';\nimport RefTreeTransferBaseUI from '../../src/index';\nimport '../../src/index.less';\nimport {Button} from 'tinper-bee';\nlet op =  {\n\ttitle : '参照默认标题',\n\ttextOption : { leftTitle : '默认树标题', rightTitle : '默认穿梭框', leftInfo :[], rightInfo :[] },\n\tclassName:'',\n\tbackdrop:true,\n\trefModelUrl:{},\n\tdisplayField:'{refname}-{refcode}-jaja',\n\tvalueField:'refcode',\n\tlang:'zh_CN',\n\ttheme : 'ref-red',\n\tsearchPlaceholder:'搜索自定义',\n\tnotFoundContent:'暂无数据自定义',\n};\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\ttreeData: [{\"children\":[{\"children\":[],\"pid\":\"lkp\",\"refpk\":\"857c41b7-e1a3-11e5-aa70-0242ac11001d\",\"refcode\":\"wujd\",\"id\":\"wujd\",\"isLeaf\":\"true\",\"refname\":\"开发部\"},{\"children\":[],\"pid\":\"lkp\",\"refpk\":\"780aca16-e1a3-11e5-aa70-0242ac11001d\",\"refcode\":\"fzl\",\"id\":\"fzl\",\"isLeaf\":\"true\",\"refname\":\"人事部\"}],\"pid\":\"\",\"refpk\":\"708918f5-e1a3-11e5-aa70-0242ac11001d\",\"refcode\":\"lkp\",\"id\":\"lkp\",\"refname\":\"总公司\"}],\n\t\t\ttransferData: [{\"rownum_\":1,\"login_name\":\"43\",\"name\":\"花43\",\"refcode\":\"43\",\"refpk\":\"718dda50629e4f8a8833b5d17de85280\",\"id\":\"718dda50629e4f8a8833b5d17de85280\",\"refname\":\"花43\",\"key\":\"43\",\"title\":\"花43-43\"},{\"rownum_\":2,\"login_name\":\"46\",\"name\":\"花46\",\"refcode\":\"46\",\"refpk\":\"b595b95cf45348d7aadb7ae349a89a76\",\"id\":\"b595b95cf45348d7aadb7ae349a89a76\",\"refname\":\"花46\",\"key\":\"46\",\"title\":\"花46-46\"},{\"rownum_\":3,\"login_name\":\"48\",\"name\":\"花48\",\"refcode\":\"48\",\"refpk\":\"62310dd3677440ef96042b9c3ad135e2\",\"id\":\"62310dd3677440ef96042b9c3ad135e2\",\"refname\":\"花48\",\"key\":\"48\",\"title\":\"花48-48\"},{\"rownum_\":4,\"login_name\":\"53\",\"name\":\"花53\",\"refcode\":\"53\",\"refpk\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"id\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"refname\":\"花53\",\"key\":\"53\",\"title\":\"花53-53\"},{\"rownum_\":5,\"login_name\":\"70\",\"name\":\"花70\",\"refcode\":\"70\",\"refpk\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"id\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"refname\":\"花70\",\"key\":\"70\",\"title\":\"花70-70\"},{\"rownum_\":6,\"login_name\":\"73\",\"name\":\"花73\",\"refcode\":\"73\",\"refpk\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"id\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"refname\":\"花73\",\"key\":\"73\",\"title\":\"花73-73\"},{\"rownum_\":7,\"login_name\":\"76\",\"name\":\"花76\",\"refcode\":\"76\",\"refpk\":\"7768b51dc14544669f2cffa840edb049\",\"id\":\"7768b51dc14544669f2cffa840edb049\",\"refname\":\"花76\",\"key\":\"76\",\"title\":\"花76-76\"},{\"rownum_\":8,\"login_name\":\"80\",\"name\":\"花80\",\"refcode\":\"80\",\"refpk\":\"a89cc45ed1ec49f19bb608c18c958359\",\"id\":\"a89cc45ed1ec49f19bb608c18c958359\",\"refname\":\"花80\",\"key\":\"80\",\"title\":\"花80-80\"},{\"rownum_\":9,\"login_name\":\"78\",\"name\":\"花78\",\"refcode\":\"78\",\"refpk\":\"438d0cce9ae442e586940a582c7ee054\",\"id\":\"438d0cce9ae442e586940a582c7ee054\",\"refname\":\"花78\",\"key\":\"78\",\"title\":\"花78-78\"},{\"rownum_\":10,\"login_name\":\"79\",\"name\":\"花79\",\"refcode\":\"79\",\"refpk\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"id\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"refname\":\"花79\",\"key\":\"79\",\"title\":\"花79-79\"},{\"login_name\":\"zhao\",\"refpk\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"id\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"refcode\":\"zhao\",\"name\":\"赵宇\",\"refname\":\"赵宇\",\"key\":\"zhao\",\"title\":\"赵宇-zhao\"},{\"login_name\":\"chen\",\"refpk\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"id\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"refcode\":\"chen\",\"name\":\"陈辉\",\"refname\":\"陈辉\",\"key\":\"chen\",\"title\":\"陈辉-chen\"},{\"login_name\":\"yue\",\"refpk\":\"14e0220f-1a86-4861-8f74-545454547489\",\"id\":\"14e0220f-1a86-4861-8f74-545454547489\",\"refcode\":\"yue\",\"name\":\"岳明\",\"refname\":\"岳明\",\"key\":\"yue\",\"title\":\"岳明-yue\"},{\"login_name\":\"xiao\",\"refpk\":\"14e0220f-1a86-4861-8f74-543434537379\",\"id\":\"14e0220f-1a86-4861-8f74-543434537379\",\"refcode\":\"xiao\",\"name\":\"小羽\",\"refname\":\"小羽\",\"key\":\"xiao\",\"title\":\"小羽-xiao\"},{\"login_name\":\"123\",\"refpk\":\"14e0220f-1a86-4861-8f74-334455643336\",\"id\":\"14e0220f-1a86-4861-8f74-334455643336\",\"refcode\":\"123\",\"name\":\"123\",\"refname\":\"123\",\"key\":\"123\",\"title\":\"123-123\"},{\"login_name\":\"huang\",\"refpk\":\"14e0220f-1a86-4861-8f74-333387127390\",\"id\":\"14e0220f-1a86-4861-8f74-333387127390\",\"refcode\":\"huang\",\"name\":\"黄东东\",\"refname\":\"黄东东\",\"key\":\"huang\",\"title\":\"黄东东-huang\"},{\"login_name\":\"liu\",\"refpk\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"id\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"refcode\":\"liu\",\"name\":\"刘志鹏\",\"refname\":\"刘志鹏\",\"key\":\"liu\",\"title\":\"刘志鹏-liu\"},{\"login_name\":\"liukunlin\",\"refpk\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"id\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"refcode\":\"liukunlin\",\"name\":\"刘坤琳\",\"refname\":\"刘坤琳\",\"key\":\"liukunlin\",\"title\":\"刘坤琳-liukunlin\"}],\n            targetKeys: [],\n            confirmTargetKeys:[],\n            showModal:false,\n\t\t}\n\t\tthis.transferData = [{\"rownum_\":1,\"login_name\":\"43\",\"name\":\"花43\",\"refcode\":\"43\",\"refpk\":\"718dda50629e4f8a8833b5d17de85280\",\"id\":\"718dda50629e4f8a8833b5d17de85280\",\"refname\":\"花43\"},{\"rownum_\":2,\"login_name\":\"46\",\"name\":\"花46\",\"refcode\":\"46\",\"refpk\":\"b595b95cf45348d7aadb7ae349a89a76\",\"id\":\"b595b95cf45348d7aadb7ae349a89a76\",\"refname\":\"花46\"},{\"rownum_\":3,\"login_name\":\"48\",\"name\":\"花48\",\"refcode\":\"48\",\"refpk\":\"62310dd3677440ef96042b9c3ad135e2\",\"id\":\"62310dd3677440ef96042b9c3ad135e2\",\"refname\":\"花48\"},{\"rownum_\":4,\"login_name\":\"53\",\"name\":\"花53\",\"refcode\":\"53\",\"refpk\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"id\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"refname\":\"花53\"},{\"rownum_\":5,\"login_name\":\"70\",\"name\":\"花70\",\"refcode\":\"70\",\"refpk\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"id\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"refname\":\"花70\"},{\"rownum_\":6,\"login_name\":\"73\",\"name\":\"花73\",\"refcode\":\"73\",\"refpk\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"id\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"refname\":\"花73\"},{\"rownum_\":7,\"login_name\":\"76\",\"name\":\"花76\",\"refcode\":\"76\",\"refpk\":\"7768b51dc14544669f2cffa840edb049\",\"id\":\"7768b51dc14544669f2cffa840edb049\",\"refname\":\"花76\"},{\"rownum_\":8,\"login_name\":\"80\",\"name\":\"花80\",\"refcode\":\"80\",\"refpk\":\"a89cc45ed1ec49f19bb608c18c958359\",\"id\":\"a89cc45ed1ec49f19bb608c18c958359\",\"refname\":\"花80\"},{\"rownum_\":9,\"login_name\":\"78\",\"name\":\"花78\",\"refcode\":\"78\",\"refpk\":\"438d0cce9ae442e586940a582c7ee054\",\"id\":\"438d0cce9ae442e586940a582c7ee054\",\"refname\":\"花78\"},{\"rownum_\":10,\"login_name\":\"79\",\"name\":\"花79\",\"refcode\":\"79\",\"refpk\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"id\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"refname\":\"花79\"},{\"login_name\":\"zhao\",\"refpk\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"id\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"refcode\":\"zhao\",\"name\":\"赵宇\",\"refname\":\"赵宇\"},{\"login_name\":\"chen\",\"refpk\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"id\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"refcode\":\"chen\",\"name\":\"陈辉\",\"refname\":\"陈辉\"},{\"login_name\":\"yue\",\"refpk\":\"14e0220f-1a86-4861-8f74-545454547489\",\"id\":\"14e0220f-1a86-4861-8f74-545454547489\",\"refcode\":\"yue\",\"name\":\"岳明\",\"refname\":\"岳明\"},{\"login_name\":\"xiao\",\"refpk\":\"14e0220f-1a86-4861-8f74-543434537379\",\"id\":\"14e0220f-1a86-4861-8f74-543434537379\",\"refcode\":\"xiao\",\"name\":\"小羽\",\"refname\":\"小羽\"},{\"login_name\":\"123\",\"refpk\":\"14e0220f-1a86-4861-8f74-334455643336\",\"id\":\"14e0220f-1a86-4861-8f74-334455643336\",\"refcode\":\"123\",\"name\":\"123\",\"refname\":\"123\"},{\"login_name\":\"huang\",\"refpk\":\"14e0220f-1a86-4861-8f74-333387127390\",\"id\":\"14e0220f-1a86-4861-8f74-333387127390\",\"refcode\":\"huang\",\"name\":\"黄东东\",\"refname\":\"黄东东\"},{\"login_name\":\"liu\",\"refpk\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"id\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"refcode\":\"liu\",\"name\":\"刘志鹏\",\"refname\":\"刘志鹏\"},{\"login_name\":\"liukunlin\",\"refpk\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"id\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"refcode\":\"liukunlin\",\"name\":\"刘坤琳\",\"refname\":\"刘坤琳\"}]\n\t}\n\t\n\t\n\thandleTreeSelect = (selectNode = {}) => {\n\t\tlet {targetKeys}  = this.state;\n\t\tlet {valueField} = op\n        let startFlag,endFlag;\n        if(selectNode.refcode===\"fzl\"){\n            startFlag = 10;\n            endFlag = 18\n        }else if(selectNode.refcode === 'wujd'){\n            startFlag = 0;\n            endFlag = 10;\n        }else{\n            startFlag=0;\n            endFlag=18;\n\t\t}\n\t\tlet newData = this.transferData.slice(startFlag,endFlag);//模拟ajax请求拿到新数据\n\t\tlet selectedData = this.transferData.filter(v => {\n\t\t\treturn targetKeys.some(key => key == v[valueField])\n\t\t});//已经在右表（已选中）数据获取\n\t\tlet temp = newData.filter((v, k) => {\n\t\t\treturn selectedData.every(v1 => v1[valueField] != v[valueField])\n\t\t})//新数据排除已选中\n        let tempTransferData = temp.concat(selectedData);\n\t\tthis.setState({\n\t\t\ttransferData:tempTransferData,\n\t\t});\n\t}\n\ttransferSave = () => {\n\t\tvar { transferData, targetKeys } = this.state;\n\t\tlet needTransferData = [];\n\t\ttargetKeys.forEach((v, i) => {\n\t\t\ttransferData.forEach((v2, i2) => {\n\t\t\t\tif (v == v2['refcode']) {\n\t\t\t\t\tneedTransferData.push(v2)\n\t\t\t\t}\n\t\t\t})\n\t\t});\n\t\tthis.setState({\n\t\t\tconfirmTargetKeys: needTransferData,\n\t\t\tshowModal:false,\n\t\t})\n\t\t\n\t}\n\ttransferCancel = () => {\n\t\tlet{confirmTargetKeys} = this.state;\n\t\tlet cancelTargetKeys = [] ;\n\t\tconfirmTargetKeys.forEach((v, i) => {\n\t\t\tcancelTargetKeys.push(v['refcode'])\n\t\t});\n\t\tthis.setState({\n\t\t\ttargetKeys:cancelTargetKeys,\n\t\t\tshowModal:false,\n\t\t})\n\t}\n\tsetTargetKeys = (targetKeys) => {\n\t\tthis.setState({\n\t\t\ttargetKeys,\n\t\t})\n\t}\n\tonChangerightSearch = (value) => {\n\t\talert('onChangerightSearch'+value)\n\t}\n\n\trender() {\n\t\t\n\t\tlet { treeData, transferData=[], targetKeys, showModal } = this.state\n\t\t//20190226穿梭框没有清空按钮并且目前存在问题\n\t\tlet baseProps = {\n\t\t\t...op,\n\t\t\tonChangerightSearch : this.onChangerightSearch,\n\t\t\t//方法\n\t\t\thandleTreeSelect : this.handleTreeSelect,\n\t\t\t//transfer\n\t\t\ttreeData,\n\t\t\ttransferData,\n            targetKeys,\n\t\t\tsetTargetKeys:this.setTargetKeys,\n\t\t\tonSave:this.transferSave,\n\t\t\tonCancel:this.transferCancel,\n\t\t\tonChangeleftSearch:()=>{},\n\t\t\tshowModal,\n\t\t}\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<RefTreeTransferBaseUI {...baseProps} />\n\t\t\t\t<Button onClick={()=>{this.setState({showModal:true})}}>打开</Button>\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n\n","desc":" 使用RefTreeTransferBaseUI，无input框"},{"example":<Demo2 />,"title":" 基本示例2","code":"/**\n *\n * @title 基本示例2\n * @description 使用RefTreeTransferWithInput，带有input框\n *\n */\nimport React, { Component } from 'react';\nimport {RefTreeTransferWithInput} from '../../src/index';\nimport { Button } from 'tinper-bee';\nimport '../../src/index.less';\nlet op =  {\n\ttitle : '参照默认标题',\n\ttextOption : { leftTitle : '默认树标题', rightTitle : '默认穿梭框', leftInfo :[], rightInfo :[] },\n\tclassName:'',\n\tbackdrop:true,\n\trefModelUrl:{},\n\tdisplayField:'{refname}-{refcode}',\n\tvalueField:'refcode',\n\tlang:'zh_CN',\n\ttheme : 'ref-red',\n\tsearchPlaceholder:'搜索自定义',\n\tnotFoundContent:'暂无数据自定义',\n};\nclass Demo2 extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t\tthis.state = {\n\t\t\ttreeData: [{\"children\":[{\"children\":[],\"pid\":\"lkp\",\"refpk\":\"857c41b7-e1a3-11e5-aa70-0242ac11001d\",\"refcode\":\"wujd\",\"id\":\"wujd\",\"isLeaf\":\"true\",\"refname\":\"开发部\"},{\"children\":[],\"pid\":\"lkp\",\"refpk\":\"780aca16-e1a3-11e5-aa70-0242ac11001d\",\"refcode\":\"fzl\",\"id\":\"fzl\",\"isLeaf\":\"true\",\"refname\":\"人事部\"}],\"pid\":\"\",\"refpk\":\"708918f5-e1a3-11e5-aa70-0242ac11001d\",\"refcode\":\"lkp\",\"id\":\"lkp\",\"refname\":\"总公司\"}],\n\t\t\ttransferData: [{\"rownum_\":1,\"login_name\":\"43\",\"name\":\"花43\",\"refcode\":\"43\",\"refpk\":\"718dda50629e4f8a8833b5d17de85280\",\"id\":\"718dda50629e4f8a8833b5d17de85280\",\"refname\":\"花43\",\"key\":\"43\",\"title\":\"花43-43\"},{\"rownum_\":2,\"login_name\":\"46\",\"name\":\"花46\",\"refcode\":\"46\",\"refpk\":\"b595b95cf45348d7aadb7ae349a89a76\",\"id\":\"b595b95cf45348d7aadb7ae349a89a76\",\"refname\":\"花46\",\"key\":\"46\",\"title\":\"花46-46\"},{\"rownum_\":3,\"login_name\":\"48\",\"name\":\"花48\",\"refcode\":\"48\",\"refpk\":\"62310dd3677440ef96042b9c3ad135e2\",\"id\":\"62310dd3677440ef96042b9c3ad135e2\",\"refname\":\"花48\",\"key\":\"48\",\"title\":\"花48-48\"},{\"rownum_\":4,\"login_name\":\"53\",\"name\":\"花53\",\"refcode\":\"53\",\"refpk\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"id\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"refname\":\"花53\",\"key\":\"53\",\"title\":\"花53-53\"},{\"rownum_\":5,\"login_name\":\"70\",\"name\":\"花70\",\"refcode\":\"70\",\"refpk\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"id\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"refname\":\"花70\",\"key\":\"70\",\"title\":\"花70-70\"},{\"rownum_\":6,\"login_name\":\"73\",\"name\":\"花73\",\"refcode\":\"73\",\"refpk\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"id\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"refname\":\"花73\",\"key\":\"73\",\"title\":\"花73-73\"},{\"rownum_\":7,\"login_name\":\"76\",\"name\":\"花76\",\"refcode\":\"76\",\"refpk\":\"7768b51dc14544669f2cffa840edb049\",\"id\":\"7768b51dc14544669f2cffa840edb049\",\"refname\":\"花76\",\"key\":\"76\",\"title\":\"花76-76\"},{\"rownum_\":8,\"login_name\":\"80\",\"name\":\"花80\",\"refcode\":\"80\",\"refpk\":\"a89cc45ed1ec49f19bb608c18c958359\",\"id\":\"a89cc45ed1ec49f19bb608c18c958359\",\"refname\":\"花80\",\"key\":\"80\",\"title\":\"花80-80\"},{\"rownum_\":9,\"login_name\":\"78\",\"name\":\"花78\",\"refcode\":\"78\",\"refpk\":\"438d0cce9ae442e586940a582c7ee054\",\"id\":\"438d0cce9ae442e586940a582c7ee054\",\"refname\":\"花78\",\"key\":\"78\",\"title\":\"花78-78\"},{\"rownum_\":10,\"login_name\":\"79\",\"name\":\"花79\",\"refcode\":\"79\",\"refpk\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"id\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"refname\":\"花79\",\"key\":\"79\",\"title\":\"花79-79\"},{\"login_name\":\"zhao\",\"refpk\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"id\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"refcode\":\"zhao\",\"name\":\"赵宇\",\"refname\":\"赵宇\",\"key\":\"zhao\",\"title\":\"赵宇-zhao\"},{\"login_name\":\"chen\",\"refpk\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"id\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"refcode\":\"chen\",\"name\":\"陈辉\",\"refname\":\"陈辉\",\"key\":\"chen\",\"title\":\"陈辉-chen\"},{\"login_name\":\"yue\",\"refpk\":\"14e0220f-1a86-4861-8f74-545454547489\",\"id\":\"14e0220f-1a86-4861-8f74-545454547489\",\"refcode\":\"yue\",\"name\":\"岳明\",\"refname\":\"岳明\",\"key\":\"yue\",\"title\":\"岳明-yue\"},{\"login_name\":\"xiao\",\"refpk\":\"14e0220f-1a86-4861-8f74-543434537379\",\"id\":\"14e0220f-1a86-4861-8f74-543434537379\",\"refcode\":\"xiao\",\"name\":\"小羽\",\"refname\":\"小羽\",\"key\":\"xiao\",\"title\":\"小羽-xiao\"},{\"login_name\":\"123\",\"refpk\":\"14e0220f-1a86-4861-8f74-334455643336\",\"id\":\"14e0220f-1a86-4861-8f74-334455643336\",\"refcode\":\"123\",\"name\":\"123\",\"refname\":\"123\",\"key\":\"123\",\"title\":\"123-123\"},{\"login_name\":\"huang\",\"refpk\":\"14e0220f-1a86-4861-8f74-333387127390\",\"id\":\"14e0220f-1a86-4861-8f74-333387127390\",\"refcode\":\"huang\",\"name\":\"黄东东\",\"refname\":\"黄东东\",\"key\":\"huang\",\"title\":\"黄东东-huang\"},{\"login_name\":\"liu\",\"refpk\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"id\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"refcode\":\"liu\",\"name\":\"刘志鹏\",\"refname\":\"刘志鹏\",\"key\":\"liu\",\"title\":\"刘志鹏-liu\"},{\"login_name\":\"liukunlin\",\"refpk\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"id\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"refcode\":\"liukunlin\",\"name\":\"刘坤琳\",\"refname\":\"刘坤琳\",\"key\":\"liukunlin\",\"title\":\"刘坤琳-liukunlin\"}],\n            targetKeys: ['43'],\n            confirmTargetKeys:[],\n\t\t}\n\t\tthis.transferData = [{\"rownum_\":1,\"login_name\":\"43\",\"name\":\"花43\",\"refcode\":\"43\",\"refpk\":\"718dda50629e4f8a8833b5d17de85280\",\"id\":\"718dda50629e4f8a8833b5d17de85280\",\"refname\":\"花43\"},{\"rownum_\":2,\"login_name\":\"46\",\"name\":\"花46\",\"refcode\":\"46\",\"refpk\":\"b595b95cf45348d7aadb7ae349a89a76\",\"id\":\"b595b95cf45348d7aadb7ae349a89a76\",\"refname\":\"花46\"},{\"rownum_\":3,\"login_name\":\"48\",\"name\":\"花48\",\"refcode\":\"48\",\"refpk\":\"62310dd3677440ef96042b9c3ad135e2\",\"id\":\"62310dd3677440ef96042b9c3ad135e2\",\"refname\":\"花48\"},{\"rownum_\":4,\"login_name\":\"53\",\"name\":\"花53\",\"refcode\":\"53\",\"refpk\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"id\":\"d64f7d6e6d014d40841415cd35a43dcf\",\"refname\":\"花53\"},{\"rownum_\":5,\"login_name\":\"70\",\"name\":\"花70\",\"refcode\":\"70\",\"refpk\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"id\":\"2ff33db8d1e94bcbaf9ba45e1ad6ea9c\",\"refname\":\"花70\"},{\"rownum_\":6,\"login_name\":\"73\",\"name\":\"花73\",\"refcode\":\"73\",\"refpk\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"id\":\"6d8328debfc94d5b8446f58d2b0b3cdc\",\"refname\":\"花73\"},{\"rownum_\":7,\"login_name\":\"76\",\"name\":\"花76\",\"refcode\":\"76\",\"refpk\":\"7768b51dc14544669f2cffa840edb049\",\"id\":\"7768b51dc14544669f2cffa840edb049\",\"refname\":\"花76\"},{\"rownum_\":8,\"login_name\":\"80\",\"name\":\"花80\",\"refcode\":\"80\",\"refpk\":\"a89cc45ed1ec49f19bb608c18c958359\",\"id\":\"a89cc45ed1ec49f19bb608c18c958359\",\"refname\":\"花80\"},{\"rownum_\":9,\"login_name\":\"78\",\"name\":\"花78\",\"refcode\":\"78\",\"refpk\":\"438d0cce9ae442e586940a582c7ee054\",\"id\":\"438d0cce9ae442e586940a582c7ee054\",\"refname\":\"花78\"},{\"rownum_\":10,\"login_name\":\"79\",\"name\":\"花79\",\"refcode\":\"79\",\"refpk\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"id\":\"60adbcb7d4cb49449bc7879dd4fbf1f5\",\"refname\":\"花79\"},{\"login_name\":\"zhao\",\"refpk\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"id\":\"14e0220f-1a86-4861-8f74-f7134cb3235b\",\"refcode\":\"zhao\",\"name\":\"赵宇\",\"refname\":\"赵宇\"},{\"login_name\":\"chen\",\"refpk\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"id\":\"14e0220f-1a86-4861-8f74-f71343333b5b\",\"refcode\":\"chen\",\"name\":\"陈辉\",\"refname\":\"陈辉\"},{\"login_name\":\"yue\",\"refpk\":\"14e0220f-1a86-4861-8f74-545454547489\",\"id\":\"14e0220f-1a86-4861-8f74-545454547489\",\"refcode\":\"yue\",\"name\":\"岳明\",\"refname\":\"岳明\"},{\"login_name\":\"xiao\",\"refpk\":\"14e0220f-1a86-4861-8f74-543434537379\",\"id\":\"14e0220f-1a86-4861-8f74-543434537379\",\"refcode\":\"xiao\",\"name\":\"小羽\",\"refname\":\"小羽\"},{\"login_name\":\"123\",\"refpk\":\"14e0220f-1a86-4861-8f74-334455643336\",\"id\":\"14e0220f-1a86-4861-8f74-334455643336\",\"refcode\":\"123\",\"name\":\"123\",\"refname\":\"123\"},{\"login_name\":\"huang\",\"refpk\":\"14e0220f-1a86-4861-8f74-333387127390\",\"id\":\"14e0220f-1a86-4861-8f74-333387127390\",\"refcode\":\"huang\",\"name\":\"黄东东\",\"refname\":\"黄东东\"},{\"login_name\":\"liu\",\"refpk\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"id\":\"14e0220f-1a86-4861-8f74-3332332kjffo\",\"refcode\":\"liu\",\"name\":\"刘志鹏\",\"refname\":\"刘志鹏\"},{\"login_name\":\"liukunlin\",\"refpk\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"id\":\"14e0220f-1a86-4861-8f74-23323e321263\",\"refcode\":\"liukunlin\",\"name\":\"刘坤琳\",\"refname\":\"刘坤琳\"}]\n\t\tthis.value  = '{\"refname\":\"花43\",\"refcode\":43,\"refpk\":\"718dda50629e4f8a8833b5d17de85280\"}'\n\t}\n\t\n\t\n\thandleTreeSelect = (selectNode = {}) => {\n\t\tlet {targetKeys}  = this.state;\n\t\tlet {valueField} = op\n        let startFlag,endFlag;\n        if(selectNode.refcode===\"fzl\"){\n            startFlag = 10;\n            endFlag = 18\n        }else if(selectNode.refcode === 'wujd'){\n            startFlag = 0;\n            endFlag = 10;\n        }else{\n            startFlag=0;\n            endFlag=18;\n\t\t}\n\t\tlet newData = this.transferData.slice(startFlag,endFlag);//模拟ajax请求拿到新数据\n\t\tlet selectedData = this.transferData.filter(v => {\n\t\t\treturn targetKeys.some(key => key == v[valueField])\n\t\t});//已经在右表（已选中）数据获取\n\t\tlet temp = newData.filter((v, k) => {\n\t\t\treturn selectedData.every(v1 => v1[valueField] != v[valueField])\n\t\t})//新数据排除已选中\n        let tempTransferData = temp.concat(selectedData);\n\t\tthis.setState({\n\t\t\ttransferData:tempTransferData,\n\t\t});\n\t}\n\ttransferSave = () => {\n\t\tvar { transferData, targetKeys } = this.state;\n\t\tlet needTransferData = [];\n\t\ttargetKeys.forEach((v, i) => {\n\t\t\ttransferData.forEach((v2, i2) => {\n\t\t\t\tif (v == v2['refcode']) {\n\t\t\t\t\tneedTransferData.push(v2)\n\t\t\t\t}\n\t\t\t})\n\t\t});\n\t\tthis.setState({\n\t\t\tconfirmTargetKeys: needTransferData,\n\t\t})\n\t\t\n\t}\n\ttransferCancel = () => {\n\t\tlet{confirmTargetKeys} = this.state;\n\t\tlet cancelTargetKeys = [] ;\n\t\tconfirmTargetKeys.forEach((v, i) => {\n\t\t\tcancelTargetKeys.push(v['refcode'])\n\t\t});\n\t\tthis.setState({\n\t\t\ttargetKeys:cancelTargetKeys,\n\t\t})\n\t}\n\tsetTargetKeys = (targetKeys) => {\n\t\tthis.setState({\n\t\t\ttargetKeys,\n\t\t})\n\t}\n\tonChangerightSearch = (value) => {\n\t\talert('onChangerightSearch'+value)\n\t}\n\n\trender() {\n\t\t\n\t\tlet { treeData, transferData=[], targetKeys } = this.state\n\t\t//20190226穿梭框没有清空按钮并且目前存在问题\n\t\tlet baseProps = {\n\t\t\t...op,\n\t\t\tonChangerightSearch : this.onChangerightSearch,\n\t\t\t//方法\n\t\t\thandleTreeSelect : this.handleTreeSelect,\n\t\t\t//transfer\n\t\t\ttreeData,\n\t\t\ttransferData,\n            targetKeys,\n\t\t\tsetTargetKeys:this.setTargetKeys,\n\t\t\tonSave:this.transferSave,\n\t\t\tonCancel:this.transferCancel,\n\t\t\tonChangeleftSearch:()=>{},\n\t\t\tvalue:this.value\n\t\t}\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t\t<RefTreeTransferWithInput {...baseProps}/>\n\t\t\t\t\t<Button onClick={()=>{this.setState({targetKeys:[]});this.value=''}}> 清空</Button>\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n\n","desc":" 使用RefTreeTransferWithInput，带有input框"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code.replace('../../src/index.js',COMPONENT).replace('../../src/index',COMPONENT).replace('../../src',COMPONENT) }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
