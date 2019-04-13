const express = require("express");
const router = express.Router();
const query = require("./db");

/*新增*/
router.use('/test/add',function(req,res){
  let sql = "INSERT INTO quary(time, old_num, new_num, box_num) values (?,?,?,?);";
  let sqlParams = [
    req.body.time,
    req.body.old_num,
    req.body.new_num,
    req.body.box_num,
  ];
  query(sql,sqlParams,function(err,result){
    if(err){
      res.json({
        ok:false,
        message:'创建失败！'
      })
    }else {
      res.json({
        ok:true,
        id:result.insertId,
        message:'创建成功！',
      })
    }
    res.end();
  })
});

/*删除*/
router.use('test/delete',function(req,res){
  let delSql = 'DELETE FROM quary WHERE id='+req.body.id;
  query(delSql,null,function(err,rows,fields){
    if(err){
      res.json({
        ok:false,
        message:'删除失败！',
        error:err
      })
    }else {
      res.json({
        ok:true,
        message:'删除成功！'
      })
    }
    res.end();
  })
});

/*编辑*/
router.use('test/edit',function(req,res){
  let editSql = 'UPDATE quary SET time=?,old_num=?,new_num=?,box_num=? WHERE id='+req.body.id;
  let editSqlParams = [
    req.body.time,
    req.body.old_num,
    req.body.new_num,
    req.body.box_num,
  ];
  query(editSql,editSqlParams,function(err,result){
    if(err){
      res.json({
        ok:false,
        message:'修改失败！'
      })
    }else {
      res.json({
        ok:true,
        message:'修改成功！'
      })
    }
    res.end();
  })
});

/*分页显示*/
router.use('/test/query',function(req,res){
  let pageNumber = req.body.pageNumber;
  let pageSize = req.body.pageSize;
  let start = (pageNumber-1)*pageSize;
  let end = pageNumber*pageSize;
  let sql = "SELECT * FROM quary ORDER BY id LIMIT"+' '+start+','+end;
  let countSql = "SELECT COUNT(id) FROM quary";
  const promise = new Promise(function(resolve,reject){
    query(countSql,null,function(err,rows,fields){
      resolve(rows);
    })
  }).then((count)=>{
    query(sql,null,function(err,rows,fields){
      if(err){
        res.json({
          ok:false,
          message:err,
          info:null,
        })
      }else {
        res.json({
          ok:true,
          message:'查询成功！',
          info:rows,
          total:count[0]["COUNT(id)"]
        })
      }
      res.end();
    });
  })
});
/*查询*/
router.use('/test/search',function(req,res){
  let new_num = req.body.new_num;
  let searchSql = 'SELECT * FROM quary WHERE new_num='+req.body.new_num;
  query(searchSql,searchData,function(err,rows){
    if(err){
      res.json({
        ok:false,
        message:err,
        info:null,
      })
    }else {
      res.json({
        ok:true,
        message:'查询成功！',
        info:rows,
      })
    }
    res.end();
  });
});
module.exports = router;
