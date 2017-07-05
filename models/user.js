'use strict';
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING
    },{
        classMethods: {
            associate: function(models){

            }
        }
    });

    return User;
    
}