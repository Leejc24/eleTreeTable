<template>
    <div>
        <el-table
            :data="tableData1"
            style="width: 100%"
            row-key="id"
            border
            :tree-props="{children: 'children'}"
        >
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
                <template scope="scope">
                    <span v-if="!scope.row.editFlag">{{ scope.row.name }}</span>
                    <span v-if="scope.row.editFlag" class="cell-edit-input">
                        <el-input v-model="scope.row.name" />
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <el-table-column fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button
                            @click="addHandle(scope.$index, scope.row)"
                            type="text"
                            size="small"
                        >添加</el-button>
                        <el-button type="text" size="small" @click="editHandle(scope.row)">编辑</el-button>
                        <el-button type="text" size="small" @click="deleteHandle(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData1: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
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
                    address: '上海市普陀区金沙江路 2222 弄',
                    children: [{
                        id: 311,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 3333 弄'
                    }, {
                        id: 312,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 4444 弄'
                    }
                    ]
                }
                ]
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        addHandle(index, row) {
            console.log("编辑=", row.address)
        },

        editHandle(row) {
            console.log("编辑=", row.address)
        },
        deleteHandle(row) {
            console.log("删除=", row.address)
        },
        load(tree, treeNode, resolve) {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 AAAA 弄'
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 BBBB 弄'
                    }
                ])
            }, 1000)
        }
    },
}
</script>