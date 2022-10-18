import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook, ShareButton, Comments, Like, LoginButton } from 'react-facebook';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log(response);
}
export default function EmbeddedPostExample() {
  return (
    //<MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
    <>
        <div
          className="fb-like" 
          data-href="https://www.24h.com.vn/tin-tuc-trong-ngay/chinh-thuc-bao-so-5-hinh-thanh-tren-bien-dong-mien-trung-mua-nhu-trut-nuoc-c46a1405400.html" 
          data-width="100" 
          data-layout="standard" 
          data-action="like" data-size="small" data-share="true">
      </div>
      <div className="fb-comments" data-href="https://www.24h.com.vn/tin-tuc-trong-ngay/chinh-thuc-bao-so-5-hinh-thanh-tren-bien-dong-mien-trung-mua-nhu-trut-nuoc-c46a1405400.html/" data-width="" data-numposts="5"></div>
      <div className="fb-page" data-href="https://www.facebook.com/Pingg-Shop-107400511790455" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Pingg-Shop-107400511790455" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Pingg-Shop-107400511790455">Pingg Shop</a></blockquote></div>

      <FacebookLogin
        appId="1505620756529166"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    </>
  );
}
