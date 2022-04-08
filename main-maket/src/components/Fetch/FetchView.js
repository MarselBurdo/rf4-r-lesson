import React, { Component, Fragment } from "react";

export default class FetchView extends Component {
  state = {
    status: "",
    characters: [],
    filtredArr: [],
    search: "",
  };

  componentDidMount() {
    // console.log("componentDidMount");
    this.setState({ status: "start" });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");
    if (prevProps.hero !== this.props.hero) {
      console.log(this.props.hero);
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.props.hero}`
      )
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            characters: res.results,
            status: "load",
            filtredArr: [],
          });
        });
    }
  }

  //   handleOnChange = (e) => {
  //     this.setState({
  //       filtredArr: [
  //         ...this.state.characters.filter((el) =>
  //           el.status.toLowerCase().includes(e.target.value.toLowerCase())
  //         ),
  //       ],
  //     });
  //     console.log("handleOnChange");
  //   };
  handleOnChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    console.log("handleOnChange");
  };

  render() {
    const { hero } = this.props;
    const { status, characters, filtredArr, search } = this.state;

    // console.log({ status, characters, filtredArr, search });

    return (
      <>
        <div>Search characters:{hero}</div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {characters?.map((el) => (
            <Fragment key={el.id}>
              name:{el.name} - status:{el.status}
              <br />
            </Fragment>
          ))}
          {/**Best practice filter array here */}
          {/* {characters
            ?.filter((el) =>
              el.status.toLowerCase().includes(search.toLowerCase())
            )
            .map((el) => (
              <Fragment key={el.id}>
                name:{el.name} - status:{el.status}
                <br />
              </Fragment>
            ))} */}
        </div>
        <div>
          Filter characters by status
          {status === "load" && (
            <>
              <input type={"text"} onChange={this.handleOnChange} />
            </>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {/* {filtredArr?.map((el) => (
              <Fragment key={el.id}>
                name:{el.name} - status:{el.status}
                <br />
              </Fragment>
            ))} */}
          {characters
            ?.filter((el) =>
              el.status.toLowerCase().includes(search.toLowerCase())
            )
            .map((el) => (
              <Fragment key={el.id}>
                name:{el.name} - status:{el.status}
                <br />
              </Fragment>
            ))}
        </div>
      </>
    );
  }
}
