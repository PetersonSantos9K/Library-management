package repository.postgreSQL;

import api.message.error.database.LivroDatabaseMessage;
import database.ConnectionFactory;
import repository.BaseDAO;
import repository.interfaces.BookDAO;
import model.BookModel;
import exception.DataBaseException;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public class LivroDAOImpl extends BaseDAO<BookModel> implements BookDAO<BookModel> {

    private final String INSERIR_LIVRO = "INSERT INTO livros(id, titulo, ano_publicacao, autor_id) VALUES (?, ?, ?, ?)";
    private final String BUSCAR_LIVRO_ID = "SELECT * FROM livros WHERE id = ?";
    private final String DELETAR_LIVRO_ID = "DELETE FROM livros WHERE id = ?";
    private final String BUSCAR_LIVROS_AUTOR = "SELECT * FROM livros WHERE autor_id = ?";
    private final String BUSCAR_LIVROS = "SELECT * FROM livros";
    private final String BUSCAR_LIVRO_NOME = "SELECT * FROM livros WHERE titulo = ?";


    @Override
    public boolean inserir(BookModel livroModel) {
        try(var conn = ConnectionFactory.getConnection();
            var pstInserirLivro = conn.prepareStatement(INSERIR_LIVRO)
        ){
            pstInserirLivro.setString(1, livroModel.getId());
            pstInserirLivro.setString(2, livroModel.getTitulo());
            pstInserirLivro.setInt(3, livroModel.getAnoPublicacao());
            pstInserirLivro.setString(4, livroModel.getAutorId());

            return  pstInserirLivro.executeUpdate() > 0;

        } catch (SQLException ex) {
            throw new DataBaseException(
                    500,
                    LivroDatabaseMessage.ERRO_INSERIR_LIVRO.getMessage(),
                    ex
            );
        }
    }

    @Override
    public Optional<BookModel> buscarPorId(String id) {
        try(var conn = ConnectionFactory.getConnection();
            var  pstBuscarLivroId = conn.prepareStatement(BUSCAR_LIVRO_ID)
        ){
            pstBuscarLivroId.setString(1, id);

            BookModel livroModel = findOne(pstBuscarLivroId);
            return Optional.ofNullable(livroModel);
        } catch (SQLException ex) {
            throw new DataBaseException(
                    500,
                    LivroDatabaseMessage.ERRO_BUSCAR_LIVRO_ID.getMessage(),
                    ex
            );
        }
    }

    @Override
    public Optional<BookModel> buscarPorNome(String nome){
        try(var conn = ConnectionFactory.getConnection();
            var  pstbuscarLivroNome = conn.prepareStatement(BUSCAR_LIVRO_NOME)
        ){
            pstbuscarLivroNome.setString(1, nome);
            BookModel livroModel = findOne(pstbuscarLivroNome);
            return Optional.ofNullable(livroModel);
        } catch (SQLException ex){
            throw new DataBaseException(
                    500,
                    LivroDatabaseMessage.ERRO_BUSCAR_LIVRO_NOME.getMessage(),
                    ex
            );
        }
    }

    @Override
    public boolean excluir(String id) {
        try(var conn = ConnectionFactory.getConnection();
            var  pstDeletarLivroId = conn.prepareStatement(DELETAR_LIVRO_ID)
        ){
            pstDeletarLivroId.setString(1, id);
            return pstDeletarLivroId.executeUpdate() > 0;
        } catch (SQLException ex) {
            throw new DataBaseException(
                    500,
                    LivroDatabaseMessage.ERRO_EXCLUIR_LIVRO_ID.getMessage(),
                    ex
            );
        }
    }

    @Override
    public List<BookModel> selectAll(){
        try(var conn = ConnectionFactory.getConnection();
            var pstBuscarLivros = conn.prepareStatement(BUSCAR_LIVROS)
        ){
            return findAll(pstBuscarLivros);
        } catch (SQLException ex){
            throw new DataBaseException(
                    500,
                    LivroDatabaseMessage.ERRO_BUSCAR_LIVROS.getMessage(),
                    ex
            );
        }
    }

    @Override
    public List<BookModel> buscarLivrosPorAutor(String autorId) {
        try(var conn = ConnectionFactory.getConnection();
            var pstBuscarLivrosAutor = conn.prepareStatement(BUSCAR_LIVROS_AUTOR)
        ){
            pstBuscarLivrosAutor.setString(1, autorId);

            return findAll(pstBuscarLivrosAutor);
        } catch (SQLException ex) {
            throw new DataBaseException(
                    500,
                    LivroDatabaseMessage.ERRO_BUSCAR_LIVROS_AUTOR.getMessage(),
                    ex
            );
        }
    }

    @Override
    protected BookModel mapRow(ResultSet rs) throws SQLException{
        return new BookModel(
                rs.getString("id"),
                rs.getString("titulo"),
                rs.getInt("ano_publicacao"),
                rs.getString("autor_id")
        );
    }

}
