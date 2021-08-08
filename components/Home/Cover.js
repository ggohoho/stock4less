import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from "next/link";

const useStyles = makeStyles({
});

export default function Cover() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href='/search/apple-related' passHref>
        <a>
          <img src='https://cdn11.bigcommerce.com/s-il8tmlzhpf/images/stencil/original/carousel/13/slider-1.png?c=1' />
        </a>
      </Link>
    </Card>
  );
}