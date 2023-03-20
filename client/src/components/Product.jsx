import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import { dataContext } from './Context/DataContext';
import axios from 'axios';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Product() {
    const [expanded, setExpanded] = React.useState(false);

    const { carro, setCarro, cantidad, setCantidad } = useContext(dataContext)

    const [items, setItems] = useState([])

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/item/`);
            setItems(respuesta.data);
            console.log(items);
        }


        getData();

    }, [])

    const handleShopClick = () => 
        alert('Added to the shopping cart');
        setCantidad(cantidad + 1)
        if (carro.find(item => item.id === product.id)) {
            const products = carro.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            return setCarro([...products])
        }
        setCarro([...carro, product])
    

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const [clicked, setClicked] = React.useState(false);
    const handleClickFav = (id) => {
        setClicked(current => !current)
        if (clicked) {
            alert('product was deleted to your favorite list')
        }
        else if (!clicked) { alert('added to your favorite list') }
    }


    return (
        <Card sx={{ maxWidth: 200, marginX: 5, marginY: 10 }}>
            <CardHeader
                title={item.title}
                subheader={item.brand}
            />
            <CardMedia
                component="img"
                width="200"
                image={item.imgurl}
                alt="Lapiz fabercastell"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to cart" onClick={handleShopClick}>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="fav" onClick={handleClickFav}>
                    {clicked ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>More Info:</Typography>
                    <Typography paragraph>
                        {item.moreinfo}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
