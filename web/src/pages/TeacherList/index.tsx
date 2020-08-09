import React, { useState, FormEvent } from 'react';


import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';




const TeacherList = () => {

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        const response = await api.get('classes', {
            params: {
                week_day,
                subject,
                time
            }
        });
        setTeachers(response.data);
    }



    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select name="subject" value={subject} onChange={(e) => { setSubject(e.target.value) }} label="Matéria" options={[
                        { value: 'Artes', label: 'Artes' },
                        { value: 'Biologia', label: 'Biologia' },
                        { value: 'Português', label: 'Português' },
                        { value: 'Química', label: 'Química' },
                        { value: 'Matemática', label: 'Matemática' },
                        { value: 'Geografia', label: 'Geografia' },
                    ]} />
                    <Select name="week_day" value={week_day} onChange={(e) => { setWeekDay(e.target.value) }} label="Dia da semana" options={[
                        { value: '0', label: 'Domingo' },
                        { value: '1', label: 'Segunda-feira' },
                        { value: '2', label: 'Terça-feira' },
                        { value: '3', label: 'Quarta-feira' },
                        { value: '4', label: 'Quinta-feira' },
                        { value: '5', label: 'Sexta-feira' },
                        { value: '6', label: 'Sabado' },

                    ]} />
                    <Input type="time" value={time} onChange={(e) => { setTime(e.target.value) }} name="time" label="Hora" />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}

            </main>
        </div>
    );
}

export default TeacherList;