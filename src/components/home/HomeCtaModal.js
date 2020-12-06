import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import { Grid, Typography } from "@material-ui/core";
import { CtaPopupContext } from "../../contexts/CtaPopupContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: "2.1px",
    border: "none",
    maxWidth: window.innerWidth > 690 ? 500 : window.innerWidth - 25,
    outline: "none",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function HomeCtaModal() {
  const classes = useStyles();
  const { open, setOpen } = useContext(CtaPopupContext);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box mx={1.25}>
            <div className={classes.paper}>
              <Box py={1.69}>
                <Grid
                  container
                  direction="column"
                  wrap="nowrap"
                  spacing={2}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography align="center" variant="h4">
                      <b>Sign up for EconBowl!</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography align="center" variant="body2">
                      The YEI is now hiring for multiple positions! Check our
                      application page. Knowledge of economics isn’t required
                      for every position, and all are welcome to apply.
                      Applications are on a rolling basis, so apply as soon as
                      you can!
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box mt={1}>
                      <Link className="white" to="/team">
                        <Button
                          onClick={() => setOpen(false)}
                          color="primary"
                          variant="contained"
                        >
                          Apply Now
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
