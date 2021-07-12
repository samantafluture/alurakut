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
    </Box>
  );
}

export default ProfileSidebar;
