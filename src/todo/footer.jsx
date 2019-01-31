import '../assets/styles/footer.styl' 

export default {
    data() {
      return {
          author: 'Jicheng'
      }
    },
    render() {
        return (
            <div id="footer">
                <span>Writtern by {this.author}</span>
            </div>
        )
    }
}