from pathlib import Path
import os

from langchain_community.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_openai import OpenAIEmbeddings

CORPUS_DIR = Path("corpus")


def cargar_documentos():
    documentos = []

    for archivo in CORPUS_DIR.glob("*.pdf"):
        loader = PyPDFLoader(str(archivo))
        documentos.extend(loader.load())

    return documentos


def crear_fragmentos(documentos):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=150
    )

    return splitter.split_documents(documentos)


def crear_base_vectorial(fragmentos):

    embeddings = OpenAIEmbeddings(
        model="text-embedding-3-small",
        base_url="https://openrouter.ai/api/v1",
        api_key=os.environ["OPENROUTER_API_KEY"]
    )

    vectorstore = Chroma.from_documents(
        documents=fragmentos,
        embedding=embeddings,
        persist_directory="chroma_db"
    )

    return vectorstore


if __name__ == "__main__":

    documentos = cargar_documentos()

    print(f"Documentos cargados: {len(documentos)}")

    fragmentos = crear_fragmentos(documentos)

    print(f"Fragmentos creados: {len(fragmentos)}")

    crear_base_vectorial(fragmentos)

    print("Base vectorial creada correctamente.")
