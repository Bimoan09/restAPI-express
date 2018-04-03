var express = require( 'express' )
var router  = express.Router()
var model = require('../models/index');

exports.buku_list = function(req,res){
    model.bukus.findAll({})
        .then((buku) => {
            res.json({
                msg: "buku berhasil dtambah",
                data: buku
            });
        })
        .catch((error)=>{
            res.json({
                error: true,
                error: error
            })
        })
};
exports.buku_list_detail = function(req,res){
    model.bukus.findById(req.params.id)
    .then((buku) => {
        res.json({
            msg: "buku ditampilkan",
            data: buku
        });
    })
    .catch((error)=>{
        res.json({
            error: true,
            error: error
        })
    })
};

exports.buku_create = function(req,res){
    const{
        judul,
        author,
        penerbit
    } = req.body;
    model.bukus.create({
        judul: judul,
        author: author,
        penerbit: penerbit
    })
    .then((buku) => {
        res.json({
            msg: "buku berhasil ditambah",
            data: buku
        });
    })
    .catch((error)=>{
        res.json({
            error: true,
            error: error
        })
    })
};


exports.buku_update = function(req,res){
 const buku_id = (req.params.id);
 const {judul,author,penerbit} = req.body;
 model.bukus.update({
     judul: judul,
     author: author,
     penerbit: penerbit,
 },{
     where: {
         id:buku_id
    }
 })  
 .then((buku) => {
     model.bukus.findById(req.params.id)
    res.json({
        msg: "buku berhasil diupdate",
        data: buku
    });
})
.catch((error)=>{
    res.json({
        error: true,
        error: error
        })
    })
}; 

exports.buku_delete = function(req,res){
    
    const buku_id = (req.params.id);
    model.bukus.destroy({  where: {
        id: buku_id
    }})
    
    .then((buku) => {
        res.json({
            msg: "buku berhasil dihapus",
            data: buku
        });
    })
    .catch((error)=>{
        res.json({
            error: true,
            error: error
            })
        })
    }; 
    
