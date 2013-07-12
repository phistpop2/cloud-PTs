define(
    [
     'jquery',
     'underscore',
     'backbone',

     'collection/ContentsCollection',
     'collection/SequenceCollection',

     'view/layout/WorkSpace',

     'jquery_knob',
     'jquery_jlayout',
     'jquery_dim',
     'jquery_editable',
     'jquery_lightbox',
     'jquery_scrollbar',
     'jquery_sidr',
     'jquery_jmenu',
     'jquery_nested_accordion',
     'jquery_icheck',
     'jquery_farbtastic',
     'jquery_selectbox',
     'jquery_sidelayer',
     'jquery_sortable',
     'jquery_colorpicker',

      //camera
     'vector3',
     'angle3',
     'quaternion',

     'EditGround',
     'asyncRenderer',
     'ObjectController',
     'Camera',
     'eventRepeater',
        'groundListener',
        'RenderFPS'
    ],
    function($, _, Backbone,
             ContentsCollection,
             SequenceCollection,
             WorkSpace,TopToolBar,LeftMenu){

    var MainView = Backbone.View.extend({

        contentsCollection : null,
        cameraModule : null,

        initialize : function()
        {
            _.bindAll(this);

        },

        setupWork : function(event)
        {
            this.cameraModule = new CameraModule({viewPort : $('#workSpace')});
            this.initCollections();
            this.initWorkspace();
        },


        initCollections : function()
        {
            this.contentsCollection = new ContentsCollection();
            this.contentsCollection.setCameraModule(this.cameraModule);

            this.sequenceCollection = new SequenceCollection();
            this.sequenceCollection.setCameraModule(this.cameraModule);
            this.sequenceCollection.setContentsCollection(this.contentsCollection);
        },

        initWorkspace : function()
        {
            var workSpace = new WorkSpace({
                "contentsCollection" : this.contentsCollection,
                'cameraModule' : this.cameraModule
            });

        }
    });

    var initialize = function()
    {
        var mainView = new MainView;
    }

    return {
        initialize : initialize
    };
});
