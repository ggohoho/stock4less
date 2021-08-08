import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from "next/link";

const useStyles = makeStyles({
});

export default function Cover({ imagepath, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={link} passHref>
        <a>
          <img src={imagepath} />
        </a>
      </Link>
    </Card>
  );
}