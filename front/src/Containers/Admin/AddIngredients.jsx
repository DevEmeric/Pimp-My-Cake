import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label, Input, Container, Row, Col, Button } from 'reactstrap';
// import AlertAddIngredient from './AlertAddIngredient';
import PropTypes from 'prop-types';
import '../../Assets/Styles/Add_Ingredients.css';

class AddIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      name: '',
      size: '',
      price: 0,
      dispo: false,
      info: '',
      img: '',
      allerg: '',
      compatible: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.urlParams = 'cake_bases';
  }

  updateState = (e) => {
    switch (e.target.value) {
      case 'base':
        this.setState({ type: 'base' });
        this.urlParams = 'cake_bases';
        break;
      case 'fourrage':
        this.setState({ type: 'fourrage' });
        this.urlParams = 'fillings';
        break;
      case 'glaçage':
        this.setState({ type: 'glaçage' });
        this.urlParams = 'icings';
        break;
      case 'decoration':
        this.setState({ type: 'decoration' });
        this.urlParams = 'topping';
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };

    const url = `http://localhost:5000/ingredients/${this.urlParams}/new`;

    fetch(url, config)
      .then(res => res.json())
      .then((res) => {
        if (res.error) { alert(res.error);
        } else { alert('Ingrédient ajouté!');
        }
      })
      .catch((e) => {
        console.error(e);
        alert('Erreur');
      });
  }

  render() {
    return (
      <div className="bodyIng">
        <form onSubmit={this.onSubmit}>
          <Container>
            <div className="ligne-titre">
              <Row>
                <Col sm="5">
                  <h3 className="mt-3">Ajout d'un nouvel ingrédient</h3>
                </Col>
              </Row>
            </div>
            <Row className="les-row">
              <Col sm="2">
                <Label className="label-type">
                  Type d'ingrédient
                  <Input type="select" name="type" className="input-admin-type" onChange={this.updateState}>
                    <option> </option>
                    <option onClick={() => this.pupdateState('base')}>Base</option>
                    <option onClick={() => this.updateState('fourrage')}>Fourrage</option>
                    <option onClick={() => this.updateState('glaçage')}>Glaçage</option>
                    <option onClick={() => this.updateState('decoration')}>Décoration</option>
                  </Input>
                </Label>
              </Col>
              <Col sm="2">
                <Label className="label-type">
                  Nom
                  <Input type="text" name="name" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="1">
                <Label className="label-type">
                  Taille
                  <Input type="text" name="size" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="1">
                <Label for="choix_occasion" className="label-type">
                  Prix €
                  <Input type="text" name="price" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="3">
                <Label check className="label-type">
                  Description
                  <Input type="text" name="info" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="2">
                <Label check className="label-type">
                  Allergènes
                  <Input type="text" name="allerg" className="input-admin-type" onChange={this.updateState} />
                </Label>
              </Col>
              <Col sm="1">
                <Label check className="label-type" onChange={this.updateState}>
                  Disponibilité
                  <Input type="checkbox" name="dispo" />
                  {' '}
                </Label>
              </Col>
              <Col sm="4">
                <Input type="file" name="file" id="exampleFile" onChange={this.updateState} />
              </Col>
            </Row>
            <Row>
              <Button type="submit" className="btn-ajout">Ajouter mon ingrédient</Button>
            </Row>
          </Container>
        </form>
      </div>
    );
  };
};

AddIngredients.propTypes = {
  updateState: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  dispatch: state.dispatch,
  selectedIngredient: state.ingredientCharacteristics,
});

const mapDispatchToProps = dispatch => ({
  addNewIngredient: ingredientType => dispatch(this.updateState(ingredientType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);