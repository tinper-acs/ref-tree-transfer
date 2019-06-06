/**
 *
 * @title 基本示例3
 * @description 清空功能
 *
 */
import React, { Component } from 'react';
import { RefTreeTransferWithInput } from '../../src/index';
import { Button } from 'tinper-bee';
import '../../src/index.less';
import request from './request';
let options;
let refModelUrl = {
  treeUrl: '/pap_basedoc/common-ref/blobRefTree',
  tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
};
class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      confirmTargetKeys: [],
      transferData: [],
      targetKeys: ['005'],
      value: '{"refname":"人员5-自定义","refcode":"005","refpk":"718dda50629e4f8a8833b5d17de85280"}'
    }
  }
  canClickGoOn = () => {
    this.initComponent();
    return true
  }
	/**
	 * @msg: 获取mock数据，只获取tree的data
	 * @param {type} 
	 * @return: 
	 */
  async initComponent() {

    let dataMap = await request(refModelUrl.treeUrl, {
      method: 'get',
    });
    this.setState({
      treeData: !!dataMap && !!dataMap.data ? dataMap.data : [],
    });
    this.handleTreeSelect({}, refModelUrl);
  }
	/**
	 * @msg: 由树节点获取穿梭框数据
	 * @param {type} 
	 * @return: 
	 */

  handleTreeSelect = async (selectNode = {}) => {
    let { valueField } = options;
    let dataMap = await request(refModelUrl.tableBodyUrl, {
      method: 'get',
      params: '自定义'
    });
    let { data } = dataMap;
    let { transferData, targetKeys } = this.state;
    let selectedData = transferData.filter(v => {
      return targetKeys.some(key => key == v[valueField])
    });
    if (!data) data = [];
    let temp = data.filter((v, k) => {
      return selectedData.every(v1 => v1[valueField] != v[valueField])
    })
    let tempTransferData = temp.concat(selectedData);
    this.setState({
      transferData: tempTransferData,
    });
  }
  /**
   * @msg: 保存
   * @param {type} 
   * @return: 
   */
  transferSave = () => {
    var { transferData, targetKeys } = this.state;
    let needTransferData = [];
    targetKeys.forEach((v, i) => {
      transferData.forEach((v2, i2) => {
        if (v == v2['refcode']) {
          needTransferData.push(v2)
        }
      })
    });
    this.setState({
      confirmTargetKeys: needTransferData,
    })

  }
  /**
   * @msg: 弹框取消按钮
   * @param {type} 
   * @return: 
   */
  transferCancel = () => {
    let { confirmTargetKeys } = this.state;
    let cancelTargetKeys = [];
    confirmTargetKeys.forEach((v, i) => {
      cancelTargetKeys.push(v['refcode'])
    });
    this.setState({
      targetKeys: cancelTargetKeys,
    })
  }
  /**
	 * @msg: 右穿梭选中数据触发，将穿梭右侧选中的数据传过去
	 * @param {type} 
	 * @return: 
	 */
  setTargetKeys = (targetKeys) => {
    this.setState({
      targetKeys,
    })
  }
  /**
   * @msg: 清空功能
   * @param {type} 
   * @return: 
   */
  clearFunc = () => {
    this.setState({
      value: `{"refname":"","refpk":"${Math.random()}"}`,
      targetKeys: [],
    })
  }

  render() {
    options = {
      displayField: '{refname}-{refcode}-jaja',
      valueField: 'refcode',
    };
    let { treeData, transferData = [], targetKeys, value } = this.state
    //20190226穿梭框没有清空按钮并且目前存在问题
    let baseProps = {
      ...options,

      handleTreeSelect: this.handleTreeSelect,
      treeData,
      transferData,
      targetKeys,
      value: value,

      setTargetKeys: this.setTargetKeys,
      onSave: this.transferSave,
      onCancel: this.transferCancel,

      canClickGoOn: this.canClickGoOn,
    }
    return (
      <div>
        <RefTreeTransferWithInput {...baseProps} />
        <Button colors="primary" onClick={this.clearFunc}> 清空</Button>
      </div>
    );
  }
}

export default Demo3;
