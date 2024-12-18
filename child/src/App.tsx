import "@amityco/ulta-ui-kit/dist/index.css";
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ulta-ui-kit";
import "@iframe-resizer/child";

function App() {
  const getAuthToken = async () => import.meta.env.AUTH_TOKEN; // add Auth Token Key

  return (
    <>
      <AmityUiKitProvider
        apiKey={import.meta.env.API_KEY}
        userId="userB_15985132"
        ultaConfig={{
          faqCommunityId: "",
          newsCommunityId: "",
          termsAndConditionsUrl:
            "https://www.ulta.com/company/terms-and-conditions",
          privacyAndPolicyUrl: "https://www.ulta.com/company/privacy",
          defaultTab: "explore",
          allowUpdateDisplayName: true,
        }}
        // getAuthToken={getAuthToken}
        apiRegion="staging"
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100dvh",
          }}
        >
          <AmityUiKitSocial />
        </div>
      </AmityUiKitProvider>
    </>
  );
}
export default App;
