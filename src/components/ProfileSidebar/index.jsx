import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons";
import Box from "../Box";

function ProfileSidebar(props) {
  return (
    <Box as ="aside">
      <a href={`https://github.com/${props.githubUser}`}>
        <img
          src={`https://github.com/${props.githubUser}.png`}
          style={{ borderRadius: "8px" }}
        />
      </a>
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default ProfileSidebar;
