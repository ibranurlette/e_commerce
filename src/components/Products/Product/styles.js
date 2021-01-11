import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    masWidth: "100%",
  },
  media: {
    height: 8,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
