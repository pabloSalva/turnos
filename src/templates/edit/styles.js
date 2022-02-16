import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
  },
});
export default useStyles;
