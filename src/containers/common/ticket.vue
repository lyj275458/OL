<template>
	<div class="onlyWxopen">
		清除ticket
	</div>
</template>

<script>

  export default {
    data() {
      return {      	
		    initObj:{
          redirectUri:'https://wap.youxms.com/auth/back',
        }
      };
    },    
    created: function() { 		
       this.setCookie('ticket','');
       this.setCookie('authJump','');
       this.setCookie('codeuid',''); 
       // window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe5b9e2d2c1167b49&redirect_uri=https%3A%2F%2Fwap.youxms.com%2Fauth%2Fback&response_type=code&scope=snsapi_userinfo&state=state&component_appid=wx0a03ea2a594d2e68#wechat_redirect";   
    },
    methods: {
     

    }
  };
</script>
