<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            border
            :tree-props="{children: 'children'}"
        >
            <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
            <el-table-column prop="name" width="180">
                <template scope="scope">
                    <span v-if="!scope.row.editFlag">{{ scope.row.name }}</span>
                    <span v-if="scope.row.editFlag" class="cell-edit-input">
                        <el-input v-model="scope.row.name" />
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button
                        @click="addHandle(scope.$index, scope.row)"
                        type="text"
                        size="small"
                    >添加</el-button>
                    <el-button
                        type="text"
                        size="small"
                        @click="editHandle(scope.$index, scope.row)"
                    >编辑</el-button>
                    <el-button
                        type="text"
                        size="small"
                        @click="deleteHandle(scope.$index, scope.row)"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'About',
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    editFlag: false
                }, {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    editFlag: true
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [{
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1111 弄'
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 2222 弄'
                    }
                    ]
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        }
    },
    methods: {
        addHandle(index, row) {
            let _this = this;
            console.log("添加=", index, '|', row)
            let children = []
            let obj = {}
            children = row.children ? row.children : []
            obj.date = row.date
            obj.id = row.id + '' + index
            obj.name = ''
            obj.editFlag = true
            obj.address = row.address
            children.unshift(obj)
            console.log(children)
            _this.addChildTree(_this.tableData, row, children)
        },
        addChildTree(_data, row, _child) {
            let _this = this;
            _data.forEach((item1, index1) => {
                if (item1.children && item1.children.length > 0) {
                  console.log(item1.children);
                  _this.addChildTree(item1.children, row, _child);
                }
                else {
                    if (item1.id === row.id) {
                        _this.$set(_data, 'children', _child);
                    }
                }
            })
        },
        editHandle(index, row) {
            console.log("编辑=", index, '|', row);
        },
        deleteHandle(index, row) {
            console.log("删除=", index, '|', row);
        }
    }
}
</script>
<style lang="less">
.cell-edit-input .el-input, .el-input__inner {
    width: 100px;
}
</style>