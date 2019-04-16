import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'bee-modal';
import FormControl from 'bee-form-control';
import RefCoreButton from 'ref-core/lib/refs/RefCoreButton';
import TransferDiv from './transferUI';
import LeftTree from './leftTreeUI';
import './RefTreeTransferBaseUI.less';

const propTypes = {
  showModal: PropTypes.bool,
  theme: PropTypes.string,
  classname: PropTypes.string,
  backdrop: PropTypes.bool,
  title: PropTypes.string,
  param: PropTypes.object,
  checkedArray: PropTypes.array,
  defaultSelectNode: PropTypes.object,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  lang: PropTypes.string,
  handleTreeSelect: PropTypes.func,
  onChangerightSearch: PropTypes.func,
  // onChangeleftSearch: PropTypes.func,
}
const defaultProps = {
  showModal: false,
  theme: 'ref-red',
  className: '',
  title: '弹窗标题',
  backdrop: true,
  param: {//url请求参数
    refCode: 'test_common',//test_common||test_grid||test_tree||test_treeTable
    tenantId: 'xxx',
    sysId: 'xxx'
  },
  defaultSelectNode: {},
  checkedArray: [],
  onCancel: function (p) {
  },
  onSave: function (sels) {
  },
  destory: function (p) {
  },
  lang: 'zh_CN',
  handleTreeSelect: () => { },
  onChangerightSearch: () => { },
  // onChangeleftSearch: () => { },
}
//refpk
class RefTreeTransferBaseUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onSave = () =>{
		let { valueField } = this.props;
		var { transferData=[], targetKeys=[] } = this.props;
		let needTransferData = [];
		targetKeys.forEach((v, i) => {
			transferData.forEach((v2, i2) => {
				if (v == v2[valueField]) {
					needTransferData.push(v2)
				}
			})
		});
		this.props.onSave(needTransferData)
  }
  onCancel = () => {
    let {onCancel,destory} = this.props;
		onCancel && onCancel();
		destory && destory()
	}
  onClickBtn = (type) => {
		const { onSave, onCancel } = this.props;
		switch (type) {
			case 'save':
        this.onSave()
				break;
			case 'cancel':
        this.onCancel()
				break;
			default:
				this.setState({ selectedArray: [] }, () => {
				});
		}
	};
  render() {
    const {
      title = '参照默认标题',
      textOption = { leftTitle : '默认树标题', rightTitle : '默认穿梭框', leftInfo :[], rightInfo :[] },
      className,
      backdrop,
      refModelUrl={tableBodyUrlSearch:''},
      displayField,
      valueField,
      buttons,
      showModal,
      lang,
      theme = 'ref-red',
      searchPlaceholder='',
      notFoundContent='',
      treeData = [], //树的数据
      onChangerightSearch,
      //方法
      handleTreeSelect,
      //transfer
      transferData=[],
      setTargetKeys,
      transferSave,
      transferCancel,
      targetKeys,
      // onChangeleftSearch,
    } = this.props;
    let { leftTitle = '默认树标题', rightTitle = '默认穿梭框' } = textOption;
    return (
      <Modal
        show={showModal}
        className={` ${theme} ref-core-modal ${className} ref-core ref-tree-transfer`}
        size="xlg"
        backdrop={backdrop}
        onHide={()=>{this.onClickBtn('cancel')}}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title > {title}</Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <div className={'ref-tree-transfer-tree'}>
            {!!leftTitle && <div className={'ref-tree-transfer-tree-title'}>{leftTitle}</div>}
            <LeftTree data={treeData} valueField={valueField} handleTreeSelect={handleTreeSelect} lang={lang} />
          </div>
          <div className={'ref-tree-transfer-right'}>
            {
              !!rightTitle &&
              <div className={'ref-tree-transfer-right-title'}>
                {rightTitle}
                {
                  refModelUrl.tableBodyUrlSearch ?
                    <div className={'ref-tree-transfer-right-search'}> <FormControl
                      placeholder="搜索"
                      onChange={onChangerightSearch}
                    /></div> : null
                }

              </div>
            }
            <TransferDiv
              textOption={textOption}
              transferData={transferData}
              targetKeys={targetKeys}
              displayField={displayField}
              valueField={valueField}
              setTargetKeys={setTargetKeys}
              transferSave={transferSave}
              transferCancel={transferCancel}
              buttons={buttons}
              isHasSearch={refModelUrl.tableBodyUrlSearch}
              searchPlaceholder={searchPlaceholder}
              notFoundContent={notFoundContent}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className={`ref-core-modal-footer `}>
          <RefCoreButton language={lang} onClickBtn={this.onClickBtn} buttons={buttons} emptyBut={false} />
        </Modal.Footer>
      </Modal>
    );
  }
}
RefTreeTransferBaseUI.propTypes = propTypes;
RefTreeTransferBaseUI.defaultProps = defaultProps;
export default RefTreeTransferBaseUI;
