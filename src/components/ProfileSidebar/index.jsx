import Box from "../Box";

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.username}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default ProfileSidebar;