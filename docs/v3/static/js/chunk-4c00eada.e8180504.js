(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c00eada"],{3901:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"tip"},[e._v(" 使用自定义模板渲染，通过 "),n("table-column-api-link",{attrs:{prop:"slots"}}),e._v(" 属性使用自定义插槽来编写模板或 "),n("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX",target:"_blank"}},[e._v("JSX")]),e._v(" 渲染函数或 "),n("a",{staticClass:"link",attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#%E8%99%9A%E6%8B%9F-DOM",target:"_blank"}},[e._v("VNode")]),n("span",{staticClass:"red"},[e._v("（注：返回数组格式）")]),n("br"),n("grid-api-link",{attrs:{prop:"form"}}),e._v("：自定义表单模板"),n("br"),n("grid-api-link",{attrs:{prop:"toolbar"}}),e._v("：自定义工具栏模板"),n("br"),n("grid-api-link",{attrs:{prop:"top"}}),e._v("：自定义顶部模板"),n("br"),n("grid-api-link",{attrs:{prop:"bottom"}}),e._v("：自定义底部模板"),n("br"),n("grid-api-link",{attrs:{prop:"pager"}}),e._v("：自定义分页模板"),n("br")],1),n("vxe-grid",{ref:"xGrid",staticClass:"my-grid66",attrs:{border:"",resizable:"","show-footer":"",height:"600","footer-method":e.footerMethod,columns:e.tableColumn,data:e.tableData,"toolbar-config":e.tableToolbar,"edit-config":{trigger:"click",mode:"cell",icon:"fa fa-pencil-square-o"}},on:{"checkbox-change":e.checkboxChangeEvent,"checkbox-all":e.checkboxChangeEvent},scopedSlots:e._u([{key:"form",fn:function(){return[n("vxe-form",{attrs:{data:e.formData},on:{submit:e.searchEvent}},[n("vxe-form-item",{attrs:{title:"名称",field:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return[n("vxe-input",{attrs:{placeholder:"请输入名称",clearable:""},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"data.name"}})]}}])}),n("vxe-form-item",{attrs:{title:"昵称",field:"nickname"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return[n("vxe-input",{attrs:{placeholder:"请输入昵称",clearable:""},model:{value:a.nickname,callback:function(t){e.$set(a,"nickname",t)},expression:"data.nickname"}})]}}])}),n("vxe-form-item",{attrs:{title:"性别",field:"sex"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return[n("vxe-select",{attrs:{placeholder:"请选择性别",clearable:""},model:{value:a.sex,callback:function(t){e.$set(a,"sex",t)},expression:"data.sex"}},[n("vxe-option",{attrs:{value:"1",label:"女"}}),n("vxe-option",{attrs:{value:"2",label:"男"}})],1)]}}])}),n("vxe-form-item",{scopedSlots:e._u([{key:"default",fn:function(){return[n("vxe-button",{attrs:{status:"primary"}},[e._v("查询")])]},proxy:!0}])})],1)]},proxy:!0},{key:"toolbar_buttons",fn:function(){return[n("vxe-form",[n("vxe-form-item",{scopedSlots:e._u([{key:"default",fn:function(){return[n("vxe-input",{attrs:{placeholder:"搜索"}})]},proxy:!0}])}),n("vxe-form-item",{scopedSlots:e._u([{key:"default",fn:function(){return[n("vxe-button",{attrs:{status:"primary"}},[e._v("查询")])]},proxy:!0}])})],1)]},proxy:!0},{key:"toolbar_tools",fn:function(){return[n("vxe-input",{attrs:{placeholder:"搜索"}})]},proxy:!0},{key:"top",fn:function(){return[n("div",{staticClass:"alert-message"},[n("i",{staticClass:"fa fa-exclamation-circle alert-message-icon"}),n("span",{staticClass:"alert-message-content"},[n("div",[e._v("自定义模板")])])])]},proxy:!0},{key:"name_header",fn:function(){return[n("div",{staticClass:"first-col"},[n("div",{staticClass:"first-col-top"},[e._v("名称")]),n("div",{staticClass:"first-col-bottom"},[e._v("类型")])])]},proxy:!0},{key:"num_default",fn:function(t){var a=t.row,s=t.rowIndex;return[2===s?[n("vxe-switch",{model:{value:a.flag,callback:function(t){e.$set(a,"flag",t)},expression:"row.flag"}})]:3===s?[n("vxe-switch",{attrs:{"open-label":"开","close-label":"关"},model:{value:a.flag,callback:function(t){e.$set(a,"flag",t)},expression:"row.flag"}})]:[n("span",[e._v(e._s(a.num1))])]]}},{key:"num_footer",fn:function(t){var a=t.items,s=t._columnIndex;return[n("span",{staticStyle:{color:"red"}},[e._v("合计："+e._s(a[s]))])]}},{key:"num1_default",fn:function(t){var a=t.row;return[n("span",[e._v("￥"+e._s(a.num1)+"元")])]}},{key:"num1_header",fn:function(t){var a=t.column;return[n("span",[n("i",[e._v("@")]),n("span",{staticStyle:{color:"red"},on:{click:e.headerClickEvent}},[e._v(e._s(a.title))])])]}},{key:"num1_footer",fn:function(t){var a=t.items,s=t._columnIndex;return[n("span",[n("vxe-button",{attrs:{status:"primary",size:"mini"}},[e._v("自定义")]),n("span",[e._v("累计："+e._s(a[s]))])],1)]}},{key:"num1_filter",fn:function(t){var a=t.column,s=t.$panel;return[n("div",e._l(a.filters,(function(t,a){return n("div",{key:a},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"option.data"}],attrs:{type:"type"},domProps:{value:t.data},on:{input:[function(n){n.target.composing||e.$set(t,"data",n.target.value)},function(n){return e.changeFilterEvent(n,t,s)}]}})])})),0)]}},{key:"num1_edit",fn:function(t){var a=t.row;return[n("input",{directives:[{name:"model",rawName:"v-model",value:a.num1,expression:"row.num1"}],staticClass:"my-input",attrs:{type:"number"},domProps:{value:a.num1},on:{input:function(t){t.target.composing||e.$set(a,"num1",t.target.value)}}})]}},{key:"img1_default",fn:function(t){var a=t.row;return[a.img1?n("img",{staticStyle:{width:"100px"},attrs:{src:a.img1}}):n("span",[e._v("无")])]}},{key:"bottom",fn:function(){return[n("div",{staticClass:"alert-message"},[n("i",{staticClass:"fa fa-exclamation-circle alert-message-icon"}),n("span",{staticClass:"alert-message-content"},[n("div",[e._v("自定义模板")])])])]},proxy:!0},{key:"pager",fn:function(){return[n("vxe-pager",{attrs:{perfect:"","current-page":e.tablePage.currentPage,"page-size":e.tablePage.pageSize,total:e.tablePage.totalResult},on:{"update:currentPage":function(t){return e.$set(e.tablePage,"currentPage",t)},"update:current-page":function(t){return e.$set(e.tablePage,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.tablePage,"pageSize",t)},"update:page-size":function(t){return e.$set(e.tablePage,"pageSize",t)}},scopedSlots:e._u([{key:"left",fn:function(){return[n("span",{staticClass:"page-left"},[n("vxe-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.changeAllEvent},model:{value:e.isAllChecked,callback:function(t){e.isAllChecked=t},expression:"isAllChecked"}}),n("span",{staticClass:"select-count"},[e._v("已选中 "+e._s(e.selectRecords.length)+" 条")]),n("vxe-button",[e._v("修改")]),n("vxe-button",[e._v("管理")]),n("vxe-button",[e._v("删除")]),n("vxe-button",{attrs:{size:"small"},scopedSlots:e._u([{key:"default",fn:function(){return[e._v("更多操作")]},proxy:!0},{key:"dropdowns",fn:function(){return[n("vxe-button",{attrs:{type:"text"}},[e._v("批量修改")]),n("vxe-button",{attrs:{type:"text"}},[e._v("批量管理")]),n("vxe-button",{attrs:{type:"text"}},[e._v("批量删除")])]},proxy:!0}])})],1)]},proxy:!0},{key:"right",fn:function(){return[n("span",[n("img",{staticStyle:{height:"30px"},attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}}),n("img",{staticStyle:{height:"30px"},attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}}),n("img",{staticStyle:{height:"30px"},attrs:{src:"https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif"}}),n("img",{staticStyle:{height:"30px"},attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}}),n("img",{staticStyle:{height:"30px"},attrs:{src:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"}})])]},proxy:!0}])})]},proxy:!0}])}),n("vxe-modal",{attrs:{title:"查看详情",width:"800",height:"400",resize:""},scopedSlots:e._u([{key:"default",fn:function(){return[e.selectRow?n("div",{domProps:{innerHTML:e._s(e.selectRow.html3)}}):e._e()]},proxy:!0}]),model:{value:e.showDetails,callback:function(t){e.showDetails=t},expression:"showDetails"}}),n("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),n("pre",[e._v("    "),n("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),n("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n    "),n("pre-code",{staticClass:"css"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n  ")],1)],1)},s=[],o=(n("d3b7"),n("159b"),n("a9e3"),n("d81d"),n("caad"),n("a388")),i=n.n(o),r={data:function(){var e=this,t=this.$createElement;return{searchVal1:"",searchVal2:"",showDetails:!1,selectRow:null,isAllChecked:!1,isIndeterminate:!1,selectRecords:[],formData:{name:"",nickname:"",sex:""},tablePage:{totalResult:8,currentPage:1,pageSize:10},tableData:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",num1:"222",sex:"Man",age:28,address:"Shenzhen",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10002,name:"Test2",nickname:"T2",role:"Test",num1:"536",sex:"Women",age:22,address:"Guangzhou",img1:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"},{id:10003,name:"Test3",nickname:"T3",role:"PM",num1:"1000",sex:"Man",age:32,address:"Shanghai",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",num1:"424323",sex:"Women",age:23,address:"Shenzhen",img1:""},{id:10005,name:"Test5",nickname:"T5",role:"Develop",num1:"253",sex:"Women",age:30,address:"Shanghai",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"},{id:10006,name:"Test6",nickname:"T6",role:"Designer",num1:"555",sex:"Women",age:21,address:"Shenzhen",img1:"https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"},{id:10007,name:"Test7",nickname:"T7",role:"Test",num1:"11",sex:"Man",age:29,address:"Shenzhen",img1:""},{id:10008,name:"Test8",nickname:"T8",role:"Develop",num1:"998",sex:"Man",age:35,address:"Shenzhen",img1:"https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif"}],tableToolbar:{custom:!0,slots:{buttons:"toolbar_buttons",tools:"toolbar_tools"}},tableColumn:[{type:"checkbox",width:60},{field:"name",title:"Name",width:200,resizable:!1,slots:{header:"name_header"}},{field:"age",title:"Age",width:100},{field:"num1",title:"Num1",showHeaderOverflow:!0,filters:[{data:""}],editRender:{autofocus:".my-input"},slots:{default:"num1_default",header:"num1_header",footer:"num1_footer",filter:"num1_filter",edit:"num1_edit"}},{field:"address",title:"Address",showOverflow:!0,slots:{default:function(n){var a=n.row;return[t("span",{style:"color: blue",on:{click:function(){return e.addressClickEvent(a)}}},["自定义模板内容"])]}}},{field:"img1",title:"图片路径",slots:{default:"img1_default"}}],demoCodes:['\n        <vxe-grid\n          border\n          resizable\n          show-footer\n          height="600"\n          ref="xGrid"\n          class="my-grid66"\n          :footer-method="footerMethod"\n          :columns="tableColumn"\n          :data="tableData"\n          :toolbar-config="tableToolbar"\n          :edit-config="{trigger: \'click\', mode: \'cell\', icon: \'fa fa-pencil-square-o\'}"\n          @checkbox-change="checkboxChangeEvent"\n          @checkbox-all="checkboxChangeEvent">\n          \x3c!--使用 form 插槽--\x3e\n          <template #form>\n            <vxe-form :data="formData" @submit="searchEvent">\n              <vxe-form-item title="名称" field="name">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.name" placeholder="请输入名称" clearable></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item title="昵称" field="nickname">\n                <template #default="{ data }">\n                  <vxe-input v-model="data.nickname" placeholder="请输入昵称" clearable></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item title="性别" field="sex">\n                <template #default="{ data }">\n                  <vxe-select v-model="data.sex" placeholder="请选择性别" clearable>\n                    <vxe-option value="1" label="女"></vxe-option>\n                    <vxe-option value="2" label="男"></vxe-option>\n                  </vxe-select>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item>\n                <template #default>\n                  <vxe-button status="primary">查询</vxe-button>\n                </template>\n              </vxe-form-item>\n            </vxe-form>\n          </template>\n\n          \x3c!--自定义插槽 toolbar buttons 插槽--\x3e\n          <template #toolbar_buttons>\n            <vxe-form>\n              <vxe-form-item>\n                <template #default>\n                  <vxe-input placeholder="搜索"></vxe-input>\n                </template>\n              </vxe-form-item>\n              <vxe-form-item>\n                <template #default>\n                  <vxe-button status="primary">查询</vxe-button>\n                </template>\n              </vxe-form-item>\n            </vxe-form>\n          </template>\n\n          \x3c!--自定义插槽 toolbar tools 插槽--\x3e\n          <template #toolbar_tools>\n            <vxe-input placeholder="搜索"></vxe-input>\n          </template>\n\n          \x3c!--使用 top 插槽--\x3e\n          <template #top>\n            <div class="alert-message">\n              <i class="fa fa-exclamation-circle alert-message-icon"></i>\n              <span class="alert-message-content">\n                <div>自定义模板</div>\n              </span>\n            </div>\n          </template>\n\n          \x3c!--自定义插槽--\x3e\n          <template #name_header>\n            <div class="first-col">\n              <div class="first-col-top">名称</div>\n              <div class="first-col-bottom">类型</div>\n            </div>\n          </template>\n\n          <template #num_default="{ row, rowIndex }">\n            <template v-if="rowIndex === 2">\n              <vxe-switch v-model="row.flag"></vxe-switch>\n            </template>\n            <template v-else-if="rowIndex === 3">\n              <vxe-switch v-model="row.flag" open-label="开" close-label="关"></vxe-switch>\n            </template>\n            <template v-else>\n              <span>{{ row.num1 }}</span>\n            </template>\n          </template>\n          <template #num_footer="{ items, _columnIndex }">\n            <span style="color: red">合计：{{ items[_columnIndex] }}</span>\n          </template>\n\n          <template #num1_default="{ row }">\n            <span>￥{{ row.num1 }}元</span>\n          </template>\n\n          <template #num1_header="{ column }">\n            <span>\n              <i>@</i>\n              <span style="color: red;" @click="headerClickEvent">{{ column.title }}</span>\n            </span>\n          </template>\n\n          <template #num1_footer="{ items, _columnIndex }">\n            <span>\n              <vxe-button status="primary" size="mini">自定义</vxe-button>\n              <span>累计：{{ items[_columnIndex] }}</span>\n            </span>\n          </template>\n\n          <template #num1_filter="{ column, $panel }">\n            <div>\n              <div v-for="(option, index) in column.filters" :key="index">\n                <input type="type" v-model="option.data" @input="changeFilterEvent($event, option, $panel)"/>\n              </div>\n            </div>\n          </template>\n\n          <template #num1_edit="{ row }">\n            <input type="number" class="my-input" v-model="row.num1" />\n          </template>\n\n          <template #img1_default="{ row }">\n            <img v-if="row.img1" :src="row.img1" style="width: 100px;"/>\n            <span v-else>无</span>\n          </template>\n\n          \x3c!--使用 bottom 插槽--\x3e\n          <template #bottom>\n            <div class="alert-message">\n              <i class="fa fa-exclamation-circle alert-message-icon"></i>\n              <span class="alert-message-content">\n                <div>自定义模板</div>\n              </span>\n            </div>\n          </template>\n\n          \x3c!--自定义插槽 pager 插槽--\x3e\n          <template #pager>\n            <vxe-pager\n              perfect\n              :current-page.sync="tablePage.currentPage"\n              :page-size.sync="tablePage.pageSize"\n              :total="tablePage.totalResult">\n              <template #left>\n                <span class="page-left">\n                  <vxe-checkbox v-model="isAllChecked" :indeterminate="isIndeterminate" @change="changeAllEvent"></vxe-checkbox>\n                  <span class="select-count">已选中 {{ selectRecords.length }} 条</span>\n                  <vxe-button>修改</vxe-button>\n                  <vxe-button>管理</vxe-button>\n                  <vxe-button>删除</vxe-button>\n                  <vxe-button size="small">\n                    <template #default>更多操作</template>\n                    <template #dropdowns>\n                      <vxe-button type="text">批量修改</vxe-button>\n                      <vxe-button type="text">批量管理</vxe-button>\n                      <vxe-button type="text">批量删除</vxe-button>\n                    </template>\n                  </vxe-button>\n                </span>\n              </template>\n              <template #right>\n                <span>\n                  <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="height: 30px;" />\n                  <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="height: 30px;" />\n                  <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="height: 30px;" />\n                  <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="height: 30px;" />\n                  <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="height: 30px;" />\n                </span>\n              </template>\n            </vxe-pager>\n          </template>\n        </vxe-grid>\n\n        <vxe-modal v-model="showDetails" title="查看详情" width="800" height="400" resize>\n          <template #default>\n            <div v-if="selectRow" v-html="selectRow.html3"></div>\n          </template>\n        </vxe-modal>\n        ',"\n        import VXETable from 'vxe-table'\n        \n        export default {\n          data () {\n            return {\n              searchVal1: '',\n              searchVal2: '',\n              showDetails: false,\n              selectRow: null,\n              isAllChecked: false,\n              isIndeterminate: false,\n              selectRecords: [],\n              formData: {\n                name: '',\n                nickname: '',\n                sex: ''\n              },\n              tablePage: {\n                totalResult: 8,\n                currentPage: 1,\n                pageSize: 10\n              },\n              tableData: [\n                { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', num1: '222', sex: 'Man', age: 28, address: 'Shenzhen', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', num1: '536', sex: 'Women', age: 22, address: 'Guangzhou', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },\n                { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', num1: '1000', sex: 'Man', age: 32, address: 'Shanghai', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', num1: '424323', sex: 'Women', age: 23, address: 'Shenzhen', img1: '' },\n                { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', num1: '253', sex: 'Women', age: 30, address: 'Shanghai', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' },\n                { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', num1: '555', sex: 'Women', age: 21, address: 'Shenzhen', img1: 'https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif' },\n                { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', num1: '11', sex: 'Man', age: 29, address: 'Shenzhen', img1: '' },\n                { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', num1: '998', sex: 'Man', age: 35, address: 'Shenzhen', img1: 'https://5b0988e595225.cdn.sohucs.com/images/20181014/dce7cdaa130440e8b609fad083877ef3.gif' }\n              ],\n              tableToolbar: {\n                custom: true,\n                slots: {\n                  buttons: 'toolbar_buttons',\n                  tools: 'toolbar_tools'\n                }\n              },\n              tableColumn: [\n                { type: 'checkbox', width: 60 },\n                { field: 'name', title: 'Name', width: 200, resizable: false, slots: { header: 'name_header' } },\n                { field: 'age', title: 'Age', width: 100 },\n                {\n                  field: 'num1',\n                  title: 'Num1',\n                  showHeaderOverflow: true,\n                  filters: [{ data: '' }],\n                  editRender: { autofocus: '.my-input' },\n                  slots: {\n                    // 使用插槽模板渲染\n                    default: 'num1_default',\n                    header: 'num1_header',\n                    footer: 'num1_footer',\n                    filter: 'num1_filter',\n                    edit: 'num1_edit'\n                  }\n                },\n                {\n                  field: 'address',\n                  title: 'Address',\n                  showOverflow: true,\n                  slots: {\n                    // 使用 JSX 渲染\n                    default: ({ row }) => {\n                      return [\n                        <span style=\"color: blue\" onClick={ () => this.addressClickEvent(row) }>自定义模板内容</span>\n                      ]\n                    }\n                  }\n                },\n                { field: 'img1', title: '图片路径', slots: { default: 'img1_default' } }\n              ]\n            }\n          },\n          methods: {\n            searchEvent () {\n              VXETable.modal.alert('查询')\n            },\n            showDetailEvent (row) {\n              this.selectRow = row\n              this.showDetails = true\n            },\n            headerClickEvent () {\n              VXETable.modal.alert('头部点击事件')\n            },\n            addressClickEvent (row) {\n              VXETable.modal.alert(`address点击事件：${row.address}`)\n            },\n            changeFilterEvent (event, option, $panel) {\n              $panel.changeOption(event, !!option.data, option)\n            },\n            checkboxChangeEvent () {\n              const $grid = this.$refs.xGrid\n              this.isAllChecked = $grid.isAllCheckboxChecked()\n              this.isIndeterminate = $grid.isAllCheckboxIndeterminate()\n              this.selectRecords = $grid.getCheckboxRecords()\n            },\n            changeAllEvent () {\n              const $grid = this.$refs.xGrid\n              $grid.setAllCheckboxRow(this.isAllChecked)\n              this.selectRecords = $grid.getCheckboxRecords()\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod ({ columns, data }) {\n              return [\n                columns.map((column, index) => {\n                  if (index === 0) {\n                    return '平均'\n                  } else if (['num1', 'age'].includes(column.property)) {\n                    return this.sumNum(data, column.property)\n                  }\n                  return null\n                })\n              ]\n            }\n          }\n        }\n        ",'\n        .my-grid66 .alert-message {\n          height: 40px;\n          display: flex;\n          align-items: center;\n          margin: 10px 0;\n          border-radius: 4px;\n          background-color: #e6f7ff;\n          border: 1px solid #91d5ff;\n        }\n        .my-grid66 .alert-message-icon {\n          width: 30px;\n          text-align: center;\n          color: #409eff;\n          margin-right: 8px;\n        }\n        .my-grid66 .alert-message-content {\n          flex-grow: 1;\n          padding-right: 20px;\n        }\n        .my-grid66 .page-left {\n          position: absolute;\n          left: 10px;\n          top: 50%;\n          transform: translateY(-50%);\n          z-index: 10;\n        }\n        .my-grid66 .select-count {\n          display: inline-block;\n          vertical-align: middle;\n        }\n        .my-grid66 .my-input {\n          width: 100%;\n        }\n        .my-grid66 .first-col {\n          position: relative;\n          height: 20px;\n        }\n        .my-grid66 .first-col:before {\n          content: "";\n          position: absolute;\n          left: -14px;\n          top: 10px;\n          width: 204px;\n          height: 1px;\n          transform: rotate(13deg);\n          background-color: #e8eaec;\n        }\n        .my-grid66 .first-col .first-col-top {\n          position: absolute;\n          right: 4px;\n          top: -10px;\n        }\n        .my-grid66 .first-col .first-col-bottom {\n          position: absolute;\n          left: 4px;\n          bottom: -10px;\n        }\n        ']}},methods:{searchEvent:function(){i.a.modal.alert("查询")},showDetailEvent:function(e){this.selectRow=e,this.showDetails=!0},headerClickEvent:function(){i.a.modal.alert("头部点击事件")},addressClickEvent:function(e){i.a.modal.alert("address点击事件：".concat(e.address))},changeFilterEvent:function(e,t,n){n.changeOption(e,!!t.data,t)},checkboxChangeEvent:function(){var e=this.$refs.xGrid;this.isAllChecked=e.isAllCheckboxChecked(),this.isIndeterminate=e.isAllCheckboxIndeterminate(),this.selectRecords=e.getCheckboxRecords()},changeAllEvent:function(){var e=this.$refs.xGrid;e.setAllCheckboxRow(this.isAllChecked),this.selectRecords=e.getCheckboxRecords()},sumNum:function(e,t){var n=0;return e.forEach((function(e){n+=Number(e[t])})),n},footerMethod:function(e){var t=this,n=e.columns,a=e.data;return[n.map((function(e,n){return 0===n?"平均":["num1","age"].includes(e.property)?t.sumNum(a,e.property):null}))]}}},l=r,c=(n("50ae"),n("2877")),m=Object(c["a"])(l,a,s,!1,null,"f3919530",null);t["default"]=m.exports},"50ae":function(e,t,n){"use strict";n("9858")},9858:function(e,t,n){},a9e3:function(e,t,n){"use strict";var a=n("83ab"),s=n("da84"),o=n("e330"),i=n("94ca"),r=n("6eeb"),l=n("1a2d"),c=n("7156"),m=n("3a9b"),d=n("d9b5"),u=n("c04e"),f=n("d039"),p=n("241c").f,h=n("06cf").f,g=n("9bf2").f,v=n("408a"),x=n("58a8").trim,b="Number",_=s[b],k=_.prototype,y=s.TypeError,w=o("".slice),C=o("".charCodeAt),T=function(e){var t=u(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,n,a,s,o,i,r,l,c=u(e,"number");if(d(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=x(c),t=C(c,0),43===t||45===t){if(n=C(c,2),88===n||120===n)return NaN}else if(48===t){switch(C(c,1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+c}for(o=w(c,2),i=o.length,r=0;r<i;r++)if(l=C(o,r),l<48||l>s)return NaN;return parseInt(o,a)}return+c};if(i(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,z=function(e){var t=arguments.length<1?0:_(T(e)),n=this;return m(k,n)&&f((function(){v(n)}))?c(Object(t),n,z):t},I=a?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;I.length>A;A++)l(_,S=I[A])&&!l(z,S)&&g(z,S,h(_,S));z.prototype=k,k.constructor=z,r(s,b,z)}}}]);