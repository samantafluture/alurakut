import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons";
import Box from "../Box";

function ProfileSidebar(props) {
  return (
    <Box>
      <a href={`https://github.com/${props.username}`}>
        <img
          src={`https://github.com/${props.username}.png`}
          style={{ borderRadius: "8px" }}
        />
      </a>
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.username}`}>
          @{props.username}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default ProfileSidebar;
