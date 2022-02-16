import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    backgroundColor: "red",
    paddingBottom: "40px",
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  filter: {
    width: 300,
  },
});
export default useStyles;
