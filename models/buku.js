module.exports = function(sequelize, DataTypes){
    const Buku = sequelize.define('bukus',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          judul: {
            allowNull: false,
            type: DataTypes.STRING
          },
          author: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
          },
          penerbit:{
            allowNull: false,
            type: DataTypes.STRING,
    
          },
          created_at: {
            allowNull: false,
            type: DataTypes.DATE
          },
          updated_at: {
            allowNull: false,
            type: DataTypes.DATE
          }
    },
    {
      underscored:true,
      timestamps: true
    })
    return Buku;
}