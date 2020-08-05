import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './grid.module.css'

const useStyles = makeStyles({
    root: {
        width: '100%',
        boxShadow: '11px 0px 22px -9px rgba(0,0,0,0.27)'
    },
    media: {
      height: 150,
      background: 'rgb(228, 228, 228)',
      margin: '1em',
      borderRadius: '6px'
    },
  });

const GridLayout = () => {
    const classes = useStyles();

    return (
        <main className={styles.Layout}>
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Learn Project
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Learn Projects are a widespread group of squamate reptiles, with over 6,000 species,
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>

        </main>
    )
}

export default GridLayout;
