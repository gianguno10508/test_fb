// import { FacebookProvider, EmbeddedPost, Page,Feed, useFacebook, ShareButton, Comments, Like, LoginButton } from 'react-facebook';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
// export default function EmbeddedPostExample() {
//   function handleSuccess(response) {
//     console.log(response.status);
//     console.log('done');
//   }

//   function handleError(error) {
//     console.log(error);
//     console.log('error');
//   }
//   return (
//     //<MessengerCustomerChat pageId="107400511790455" appId="1505620756529166"/>
//     <FacebookProvider appId="1505620756529166">
//       <LoginButton
//         scope="email"
//         onError={handleError}
//         onSuccess={handleSuccess}
//       >
//         Login via Facebook
//       </LoginButton>
//     </FacebookProvider>
//   );
// }
import { FacebookProvider, useShare } from 'react-facebook';

export default function ShareExample() {
  const { share, isLoading, error } = useShare();

  async function handleShare() {
    await share({
      href: 'http://www.facebook.com',
    });
  }

  return (
    <button type="button" disabled={isLoading} onClick={handleShare}>Share</button>
  );
}
