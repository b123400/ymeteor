import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';
import './main.html';
import {
    Meteor
} from 'meteor/meteor';
// import 'tabulator-tables';
// 

Items = new Mongo.Collection('items')
// 
log = console.log
var whoData = function (value, data, type, params, component) {
    //value - original value of the cell
    //data - the data for the row
    //type - the type of mutation occurring  (data|edit)
    //params - the mutatorParams object from the column definition
    //component - when the "type" argument is "edit", this contains the cell component for the edited cell, otherwise it is the column component for the column
    log(data)
    
    if(data.meta){
        // return
        var meta = data.meta.name + ";" + data.meta.dose
        return meta;
    }else{
        return data.title
    }

    // var forecast = data.ForacastDate;

}
/**
 * Data Field Renderer
 */

 var dataFieldRenderer
/** */
Template.main.onRendered(function () {
    var self = this;
    self.autorun(function () {
        var keyword = App.getSetting('keyword');
        Meteor.subscribe('searchResults', keyword)
    })
})
/**
 * 
 */
Template.main.events({
    'keyup #search'(e) {
        var keyword = $(e.currentTarget).val()
        if (e.which === 13) {
            var keyword = keyword.toLowerCase()
            App.setSetting({
                keyword: keyword
            })
        }
    }
})
/**
 * 
 */


Template.SearchView.onCreated(function(){
    var self = this;
    self.autorun(function () {
        var keyword = App.getSetting('keyword');
        Meteor.subscribe('searchResults', keyword)
        console.log(Items.find().count())
    })
})
/**
 * 
 */

Template.SearchView.events({
    'keyup #search'(e) {
        var keyword = $(e.currentTarget).val()
        if (e.which === 13) {
            var keyword = keyword.toLowerCase()
            App.setSetting({
                keyword: keyword
            })
        }
    }
})

/**
 * 
 */
Template.SearchView.helpers({
    results(){
        return Items.find({}).fetch()
    }
})


/**
 * 
 */
Template.registerHelper('countRow',(i)=>{
    var i = parseInt(i) + 1
    return i
})


