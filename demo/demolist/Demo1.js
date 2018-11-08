/**
 *
 * @title ref-treetransfer树穿梭参照
 * @description 具有单选多选的树穿梭参照
 *
 */

import React, { Component } from 'react';
import {RefTreeTransfer, RefTreeTransferWithInput, createRefTreeTransfer} from 'ref-tree-transfer';
import 'ref-tree-transfer/dist/index.css';
import Form from "bee-form";

const option = {
  title: '穿梭',
  textOption: {
      leftTitle:'默认树标题',
      rightTitle:'默认穿梭框'
  },
  param:{//url请求参数
      refCode:'test_treeTable',//test_common||test_grid||test_tree||test_treeTable
      tenantId:'xxx',
      sysId:'xxx',
      locale:'en_US',
      refModelUrl: 'http://workbench.yyuap.com/ref/rest/testref_ctr/',
  },
  refModelUrl:{
      treeUrl: 'https://mock.yonyoucloud.com/mock/358/blobRefTree',
      tableBodyUrl: 'https://mock.yonyoucloud.com/mock/358/blobRefTreeGrid',
      tableBodyUrlSearch: ''
  },
  jsonp: true,
  hearders: {},
  displayField: '{refname}-{refcode}',//显示内容的键
  valueField: 'refcode',//真实 value 的键
  checkedArray:[
      {
          "name": "sdk测试",
          "code": "334455",
          "refpk": "472c2f8f-a540-4d6b-b091-ed2409be42d3",
          "id": "472c2f8f-a540-4d6b-b091-ed2409be42d3",
          "refcode": "334455",
          "refname": "sdk测试"
        }
  ],
  onCancel: function (p) {
    console.log(p)
  },
  onSave: function (sels) {
    console.log(sels);
  }
}
class Demo1 extends Component {
    render () {
        const { getFieldError } = this.props.form;
        return (
            <div className="demoPadding">
                <RefTreeTransferWithInput {...option} 
                    form={this.props.form}
                /> 
                <span className='error'>
                    {getFieldError('refcode')}
                </span>
                <button onClick={() => {
                    this.props.form.validateFields((err, values) => {
                        console.log(err, values)
                    });
                }}>submit</button>
            </div>
        )
    }
}

export default Form.createForm()(Demo1);
