/**
 * ElementUI dropDown组件封装
 * @author realpzyyy
 * @created 2018/3/8
 *
 */
Vue.component('drop-down', {
    props: ['contents'],
    template:
    '<div>'+
        '<el-dropdown v-for="(content,index) in contents" :key="index" :trigger="useDefaultConfigs(content.configs).trigger" :placement="useDefaultConfigs(content.configs).placement" style="padding-right: 30px">'+
          '<el-button :type="useDefaultConfigs(content.configs).type" :size="useDefaultConfigs(content.configs).size">'+
            '{{content.title}}<i class="el-icon-arrow-down el-icon--right"></i>'+
          '</el-button>'+
          '<el-dropdown-menu slot="dropdown">'+
            '<el-dropdown-item  v-for="(choice,index) in content.choices" :key="index" >{{choice}}</el-dropdown-item>'+
          '</el-dropdown-menu>'+
        '</el-dropdown>'+
    '</div>',
    data: function () {
            return {
                defaultConfigs : {   //下拉框组件默认配置参数 
                    'type'          : '',  
                    'size'          : '', 
                    'trigger'       : 'hover',
                    'placement'     : 'bottom-end'
                },
            }
        },
    
    methods:{
            useDefaultConfigs  :function(configs){
                return configs ? configs : this.defaultConfigs
            }
        },

})